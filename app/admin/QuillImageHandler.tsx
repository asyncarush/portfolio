"use client";

// Check if we're in the browser
const isBrowser = typeof window !== "undefined";

// Quill modules helper for toolbar with image button
export const quillModules = (imageHandler: () => void) => ({
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  },
});

// Utility to insert image into Quill editor
export function insertImageToEditor(
  quill: {
    getSelection: () => any;
    insertEmbed: (arg0: any, arg1: string, arg2: string, arg3: string) => void;
  },
  url: string
) {
  const range = quill.getSelection();
  quill.insertEmbed(range ? range.index : 0, "image", url, "user");
}

// Returns modules config with correct image handler context
export const quillModulesWithImage = () => {
  if (!isBrowser) {
    // Return minimal config for server-side rendering
    return {
      toolbar: false,
    };
  }

  return {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: function (this: { quill: any }) {
          if (!isBrowser) return;

          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.click();
          input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
              const formData = new FormData();
              formData.append("file", file);

              try {
                const response = await fetch("/api/upload", {
                  method: "POST",
                  body: formData,
                });

                const result = await response.json();

                if (result.success) {
                  insertImageToEditor(this.quill, result.url);
                } else {
                  console.error("Image upload failed:", result.error);
                }
              } catch (error) {
                console.error("Error uploading image:", error);
              }
            }
          };
        },
      },
    },
  };
};
