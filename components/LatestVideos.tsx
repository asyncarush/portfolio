import React from "react";
import Link from "next/link";
import Image from "next/image";
import { videos } from "@/data/videos";
import { FaYoutube } from "react-icons/fa";

const LatestVideos = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
          <FaYoutube /> Latest YouTube Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(0, 3).map((video) => (
            <Link
              href={`https://www.youtube.com/watch?v=${video.id}`}
              key={video.id}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3
                  className="font-semibold text-gray-800 group-hover:text-violet-600 transition-colors truncate"
                  title={video.title}
                >
                  {video.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
