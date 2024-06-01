import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex bg-[--mainColor] h-[80px] w-full drop-shadow-lg items-center justify-between">
      <div className="relative left-12">
        <Link href="/">
          <Image src={Logo} width="220" height="100" alt="codetonic logo" />
        </Link>
      </div>
      <ul className="flex gap-12 text-xl items-center text-white pr-8 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/connect">Connect</Link>
        </li>
      </ul>
    </header>
  );
}
