"use client";

import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { quillModulesWithImage } from "./QuillImageHandler";
import Navbar from "@/components/Navbar";

export default function AdminBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const modules = useMemo(() => quillModulesWithImage(), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        setMessage("Blog post created successfully!");
        setTitle("");
        setContent("");
        setTimeout(() => setMessage(""), 3000);
      } else {
        const errorData = await response.json();
        setMessage(
          `Failed to create blog post: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while creating the blog post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Create New Blog Post
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 transition"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Content
              </label>
              <div className="h-80">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className="bg-white h-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:bg-gray-400 transition"
              >
                {isSubmitting ? "Submitting..." : "Publish Post"}
              </button>
              {message && <p className="text-sm text-gray-600">{message}</p>}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
