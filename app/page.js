"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import React from "react";

export default function Home() {
  const el = useRef();
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer", "Video Editor"],
      typeSpeed: 60,        // typing speed (ms per character)
      backSpeed: 30,        // backspacing speed
      backDelay: 1200,      // pause before backspacing
      startDelay: 300,      // small delay before starting
      loop: true,           // repeat indefinitely
      smartBackspace: true, // only erase what's necessary
      showCursor: true,     // blinking cursor
      cursorChar: "|",      // customize cursor symbol
    });

    return () => {
      // Cleanup to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col sm:flex-row lg:justify-around justify-center items-center gap-9 my-17 sm:my-30">
      <div className="first w-[80vw] sm:w-[50%] lg:w-[40%] mx-auto sm:mx-0 text-2xl sm:text-3xl lg:text-[2.75rem] sm:pl-5 lg:pl-17 flex flex-col justify-center">
        <div className="mb-2">
          Hi, My name is <span className="text-purple-900 font-semibold">Ramash</span>
        </div>
        <div className="mb-2">and I am a passionate</div>
        <div className="mb-2">
          <span ref={el} className="text-purple-700" />
        </div>
        <div className="btn mt-10 sm:my-18 mx-2 flex gap-3 lg:gap-5 text-gray-300 text-[14px] sm:text-[16px] lg:text-[20px]">
          <button className="border-2 border-gray-400 px-3 lg:px-4 py-3 rounded-md bg-[#252468] cursor-pointer"><a href="./resume.pdf" download={"resume"}>Download Resume</a></button>
          <button className="border-2 border-gray-400 px-3 lg:px-4 py-3 rounded-md bg-[#252468] cursor-pointer">Visit Projects</button>
        </div>
      </div>

      <div className="second w-[70vw] mx-auto sm:mx-0 sm:w-[50%] lg:w-[40%]">
        <Image
          src="/removebg.png"
          width={450}
          height={600}
          alt="background image"
          priority
        />
      </div>
    </section>
  );
}

