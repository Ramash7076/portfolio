import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute w-full sm:fixed lg:absolute sm:bottom-0 lg:bottom-auto bg-[rgb(17,17,54)] text-gray-600 py-6 mt-12 text-center flex flex-col-reverse gap-3 sm:flex-row justify-between px-12">
      <p className="text-sm">Copyright © {new Date().getFullYear()} www.ramash.site | All rights reserved.</p>
      <div className="flex justify-center gap-3 text-xl">
        <Link href={"mailto:ramash7076@gmail.com"} className="hover:text-gray-300"><FaEnvelope /></Link>
        <Link href={"https://linkedin.com/in/ramash-hader-08856024b"} target="_blank" className="hover:text-gray-300"><FaLinkedin /></Link>
        <Link href={"https://github.com/ramash7076"} target="_blank" className="hover:text-gray-300"><FaGithub /></Link>
        <Link href={"https://instagram.com/ramash_halder_01"} target="_blank" className="hover:text-gray-300"><FaInstagram /></Link>
      </div>
    </footer>
  );
}
