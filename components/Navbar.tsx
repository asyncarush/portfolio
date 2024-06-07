import Link from "next/link";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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

        <ul className="hidden md:flex gap-12 text-2xl items-center pr-8 font-medium">
          <li>
            <Link
              href="/"
              className="bg-violet-900 py-2 px-4 rounded-2xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="bg-violet-900 py-2 px-4 rounded-2xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a]"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/youtube"
              className="bg-violet-900 py-2 px-4 rounded-2xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a]"
            >
              Youtube
            </Link>
          </li>
          <li>
            <Link
              href="/connect"
              className="bg-violet-900 py-2 px-4 rounded-2xl text-white text-md duration-300 hover:shadow-[0px_0px_17px_0px_#44337a]"
            >
              Connect
            </Link>
          </li>
        </ul>
        <div className="md:hidden md:z-[999999999]">
          <Sheet>
            <SheetTrigger className="pr-8">
              <FaBars className="text-white w-6 h-6" />
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
