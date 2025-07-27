"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { processImageUrls, getFullImageUrl } from "@/lib/imageUtils";

interface Blog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

// Helper function to process content and ensure image URLs are correct
const processContentImages = (content: string): string => {
  if (!content) return content;
  
  // Process image URLs in the content
  return processImageUrls(content);
};

export default function SingleBlogPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/api/blogs/${id}`);
          const result = await response.json();
          if (result.success) {
            // Process the content to fix image paths
            const processedBlog = {
              ...result.data,
              content: processContentImages(result.data.content)
            };
            setBlog(processedBlog);
          } else {
            console.error("Failed to fetch blog:", result.error);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id]);

  // Custom renderer for HTML content with proper image handling
  const renderContent = (htmlContent: string) => {
    // Process image URLs first
    const processedContent = processImageUrls(htmlContent);
    
    // Sanitize the HTML content
    const sanitizedContent = DOMPurify.sanitize(processedContent, {
      ADD_TAGS: ['img'],
      ADD_ATTR: ['loading', 'decoding', 'src', 'alt', 'width', 'height', 'style', 'class'],
      // Allow data attributes for lazy loading
      ALLOW_DATA_ATTR: true,
      // Allow classes for styling
      ALLOW_UNKNOWN_PROTOCOLS: true,
    });

    return { __html: sanitizedContent };
  };

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
              dangerouslySetInnerHTML={renderContent(blog.content)}
            />
          </article>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">Blog post not found.</p>
            <button
              onClick={() => router.push('/blog')}
              className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors"
            >
              Back to Blog
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
