"use client";
import About from "@/components/About";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Populars from "@/components/Popular";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white/50 ">
      <Navbar />
      {/* <About /> */}
      <Info />
      <Skills />
      <Populars />
    </main>
  );
}
