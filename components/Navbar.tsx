import Link from "next/link";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars, FaHome } from "react-icons/fa";

export default function Navbar() {
  const headerVariant = {
    initial: {
      y: -10,
    },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        durations: 10,
      },
    },
  };

  return (
    <>
      <motion.header
        variants={headerVariant}
        initial="initial"
        animate="animate"
        className="sticky top-0 bg-white z-[999999] opacity-90 flex  border-b-violet-900 shadow-violet-300 h-[80px] w-full drop-shadow-md items-center justify-between"
      >
        <div className="relative left-12">
          <Link href="/" className="text-violet-900  text-3xl font-bold">
            {/* <Image src={Logo} width="220" height="100" alt="codetonic logo" /> */}
            {`<CodeTonic />`}
          </Link>
        </div>

        <ul className="hidden md:flex gap-12 text-md items-center pr-8 font-medium">
          <li>
            <Link
              href="/"
              className="bg-violet-900 py-2 px-4 rounded-xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a] hover:rounded-2xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="bg-violet-900 py-2 px-4 rounded-xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a] hover:rounded-2xl"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="bg-violet-900 py-2 px-4 rounded-xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a] hover:rounded-2xl"
            >
              Connect
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1gW-e2w18sr7E6zrNn8DBEARPVDC-i6Mf/view?usp=sharing"
              className="flex gap-2 items-center justify-center rounded-xl border-2 py-2 px-4 hover:border-violet-500 hover:shadow-[0px_0px_17px_0px_#44337a] hover:rounded-2xl duration-800 transition"
              target="_top"
            >
              <FaCloudDownloadAlt /> My Resume
            </Link>
          </li>
        </ul>
        <div className="md:hidden md:z-[999999999]">
          <Sheet>
            <SheetTrigger className="pr-8">
              <FaBars className=" w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="w-full top-[80px]">
              <SheetHeader>
                <SheetDescription>
                  <ul className="flex flex-col gap-8">
                    <li>
                      <Link href="/">HOME</Link>
                    </li>
                    <li>
                      <Link href="/blog">BLOG</Link>
                    </li>
                    <li>
                      <Link href="/youtube">YOUTUBE</Link>
                    </li>
                    <li>
                      <Link href="/connect">CONNECT</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
}
