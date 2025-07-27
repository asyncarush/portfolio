"use client";

// Check if we're in the browser
const isBrowser = typeof window !== "undefined";

// Define the Quill editor instance type
interface QuillInstance {
  getSelection: (focus?: boolean) => { index: number; length: number } | null;
  insertEmbed: (index: number, type: string, value: any, source?: string) => void;
  setSelection: (index: number, length: number, source?: string) => void;
  deleteText: (index: number, length: number, source?: string) => void;
  getContents: (index?: number, length?: number) => { ops: Array<{ insert?: string }> };
  getText: (index?: number, length?: number) => string;
  updateContents: (delta: any, source?: string) => void;
  insertText: (index: number, text: string, source?: string, formats?: any) => void;
}

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
  quill: QuillInstance,
  url: string
) {
  try {
    const range = quill.getSelection();
    if (range) {
      quill.insertEmbed(range.index, "image", url, "user");
      // Move cursor after the image
      quill.setSelection(range.index + 1, 0);
    }
  } catch (error) {
    console.error("Error inserting image:", error);
  }
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
    clipboard: {
      // Toggle to add extra line breaks when pasting HTML
      matchVisual: false,
    },
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
          
          input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;

            // Show loading state
            const range = this.quill.getSelection(true);
            const placeholder = 'uploading' + Math.random().toString(36).slice(-8);
            this.quill.insertText(range.index, 'Uploading... ' + placeholder + '\n');
            this.quill.setSelection(range.index + 1);

            const formData = new FormData();
            formData.append("file", file);

            try {
              const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });

              const result = await response.json();

              if (result.success) {
                // Remove the loading text
                const content = this.quill.getContents();
                const textIndex = content.ops.findIndex((op: any) => 
                  op.insert && op.insert.includes(placeholder)
                );
                
                if (textIndex !== -1) {
                  // Remove the loading text
                  const deletePosition = content.ops[textIndex].insert.indexOf(placeholder);
                  const deleteLength = placeholder.length + 'Uploading... '.length + 1; // +1 for the newline
                  this.quill.deleteText(range.index, deleteLength);
                }
                
                // Insert the image
                insertImageToEditor(this.quill, result.url);
              } else {
                console.error("Image upload failed:", result.error);
                // Remove the loading text
                const content = this.quill.getContents();
                const textIndex = content.ops.findIndex((op: any) => 
                  op.insert && op.insert.includes(placeholder)
                );
                
                if (textIndex !== -1) {
                  const deletePosition = content.ops[textIndex].insert.indexOf(placeholder);
                  const deleteLength = placeholder.length + 'Uploading... '.length + 1; // +1 for the newline
                  this.quill.deleteText(range.index, deleteLength);
                }
                
                // Show error message
                this.quill.insertText(range.index, '[Image upload failed] ', 'error');
              }
            } catch (error) {
              console.error("Error uploading image:", error);
              // Remove the loading text
              const content = this.quill.getContents();
              const textIndex = content.ops.findIndex((op: any) => 
                op.insert && op.insert.includes(placeholder)
              );
              
              if (textIndex !== -1) {
                const deletePosition = content.ops[textIndex].insert.indexOf(placeholder);
                const deleteLength = placeholder.length + 'Uploading... '.length + 1; // +1 for the newline
                this.quill.deleteText(range.index, deleteLength);
              }
              
              // Show error message
              this.quill.insertText(range.index, '[Error uploading image] ', 'error');
            }
          };
          
          // Trigger the file input click
          input.click();
        },
      },
    },
  };
};
