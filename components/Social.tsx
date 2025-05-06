import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Social() {
  return (
    <div className="flex gap-8 mt-6 z-[99999]">
      <Link
        href="https://www.youtube.com/@codetonic_arush"
        target="_blank"
        className="youtube social text-red-500"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </Link>

      <Link
        href="https://www.instagram.com/hey__arush/"
        className="instagram social text-pink-500"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
      <Link
        href="https://www.github.com/asyncarush"
        className="twitter social text-black-400"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/heyarush"
        className="linkedin social text-blue-500"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
    </div>
  );
}
