"use client";

import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import Navbar from "@/components/Navbar";

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const result = await response.json();
        if (result.success) {
          setBlogs(result.data);
        } else {
          console.error("Failed to fetch blogs:", result.error);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />
      <main className="w-full max-w-4xl mx-auto px-4 pt-10 pb-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-violet-900 tracking-tight drop-shadow-sm">
          The Blog
        </h1>
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading posts...</p>
        ) : blogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-6 rounded-xl shadow-lg border border-violet-200 flex flex-col"
              >
                <h2 className="text-2xl font-bold mb-2 text-violet-800">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Posted on {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <div
                  className="text-gray-700 mb-4 flex-grow"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      blog.content.substring(0, 150) + "..."
                    ),
                  }}
                />
                <a
                  href={`/blog/${blog._id}`}
                  className="text-violet-600 hover:text-violet-800 font-semibold self-end"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            No blog posts found.
          </p>
        )}
      </main>
    </div>
  );
}
