"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt, FaBars } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  {
    href: "https://www.youtube.com/channel/UCv5XDLZaTlEbfI4upd3E3oA",
    label: "YouTube",
  },
];

const headerVariant = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      variants={headerVariant}
      initial="hidden"
      animate="visible"
      className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm"
    >
      <nav className="container mx-auto px-6 flex justify-between items-center h-20">
        <Link
          href="/"
          className="text-violet-800 text-3xl font-bold tracking-tighter"
        >
          {`<CodeTonic />`}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2 font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                  pathname === href
                    ? "bg-violet-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-violet-100 hover:text-violet-800"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://drive.google.com/file/d/1zBNr-hbgLuMKNR_LuNBT8wKUqAwStMZs/view?usp=sharing"
              className="flex items-center gap-2 ml-4 px-4 py-2 rounded-md text-sm text-violet-700 border-2 border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-lg transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCloudDownloadAlt />
              <span>My Resume</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <FaBars className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6">
              <div className="mt-8">
                <ul className="flex flex-col gap-4">
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300 ${
                          pathname === href
                            ? "bg-violet-600 text-white"
                            : "text-gray-700 hover:bg-violet-100"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-4 border-t border-gray-200">
                    <Link
                      href="https://drive.google.com/file/d/1zlX-JDj-mr-YOgSbjFWTzylVR-ku-n6y/view?usp=sharing"
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium text-violet-700 hover:bg-violet-100 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCloudDownloadAlt />
                      <span>My Resume</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
