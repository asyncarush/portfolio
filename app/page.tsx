"use client";

import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Populars from "@/components/Popular";
import Skills from "@/components/Skills";
import LatestBlogs from "@/components/LatestBlogs";
import LatestVideos from "@/components/LatestVideos";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />
      <Info />
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Populars />
      </section>
      <section id="blog">
        <LatestBlogs />
      </section>
      <section id="videos">
        <LatestVideos />
      </section>
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
