import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import "./footer.css"; // <- make sure this is imported

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 px-4 bg-gradient-to-br from-[#1a1c2e] to-[#2d1b69] footer-gradient">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Arush Sharma
          </h2>
          <p className="text-slate-400 text-sm mt-1">Backend & AI Engineer</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl text-slate-400">
          <a
            href="https://github.com/arush-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6e5494] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/arush-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077b5] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/arush_sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1da1f2] transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/arush.codes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e4405f] transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Contact */}
        <div>
          <a
            href="mailto:arush.sharma@example.com"
            className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition"
          >
            <FaEnvelope />
            Get in Touch
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-10 text-center text-slate-400 text-sm">
        2025 • Built with <FaHeart className="inline text-red-500 mx-1" /> by
        Arush Sharma
      </div>
    </footer>
  );
}
