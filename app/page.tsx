import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Populars from "@/components/Popular";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[1400px] flex-col bg-white/40 ">
      <Navbar />
      <Info />
      <Skills />
      <Populars />
    </main>
  );
}
