"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRss } from "react-icons/fa";

interface IBlog {
  _id: string;
  title: string;
}

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          if (data.success && Array.isArray(data.data)) {
            setBlogs(data.data.slice(0, 5)); // Get latest 5 blogs
          }
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
          <FaRss /> Latest From the Blog
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link
                href={`/blog/${blog._id}`}
                key={blog._id}
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold text-gray-800 truncate"
                  title={blog.title}
                >
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
