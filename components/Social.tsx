import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Social() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.3 }}
      transition={{ ease : "easeOut"}}
      className="mt-8"
    >
      <p className="social-container flex gap-5">
        <Link
          href="https://www.youtube.com/@codetonic_arush"
          className="youtube social text-red-500"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </Link>

        <Link
          href="https://www.instagram.com/hey__arush/"
          className="instagram social text-pink-500"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Link
          href="https://www.github.com/savagearush"
          className="twitter social text-black-400"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
      </p>
    </motion.div>
  );
}
