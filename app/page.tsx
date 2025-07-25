"use client";

import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Populars from "@/components/Popular";
import Skills from "@/components/Skills";
import LatestBlogs from "@/components/LatestBlogs";
import LatestVideos from "@/components/LatestVideos";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-20 bg-white/50 ">
      <Navbar />
      <Info />
      <Skills />
      <Populars />
      <LatestBlogs />
      <LatestVideos />
      <Footer />
    </main>
  );
}
