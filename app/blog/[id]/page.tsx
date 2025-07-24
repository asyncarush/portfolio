"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
import Navbar from "@/components/Navbar";

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function SingleBlogPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/api/blogs/${id}`);
          const result = await response.json();
          if (result.success) {
            setBlog(result.data);
          } else {
            console.error("Failed to fetch blog:", result.error);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
        setLoading(false);
      };
      fetchBlog();
    }
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />
      <main className="w-full max-w-4xl mx-auto px-4 pt-10 pb-20">
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading post...</p>
        ) : blog ? (
          <article className="bg-white p-8 rounded-xl shadow-lg border border-violet-200">
            <h1 className="text-4xl font-bold mb-4 text-violet-800">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div
              className="prose lg:prose-xl max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content),
              }}
            />
          </article>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Blog post not found.
          </p>
        )}
      </main>
    </div>
  );
}
