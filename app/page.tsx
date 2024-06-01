import Info from "@/components/Info";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen w-[1400px] flex-col ">
      <Navbar />
      <Info />
    </main>
  );
}
