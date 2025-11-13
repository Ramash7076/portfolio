"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import React from "react";
import Link from "next/link";

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

  return (<>
    <section className="flex flex-col sm:flex-row lg:justify-around justify-center items-center gap-9 my-14 ">
      <div className="first w-[80vw] sm:w-[50%] lg:w-[40%] mx-auto sm:mx-0 text-2xl sm:text-3xl lg:text-[2.75rem] sm:pl-5 lg:pl-17 flex flex-col justify-center">
        <div className="mb-2">
          Hi, My name is <span className="text-purple-900 font-semibold">Ramash</span>
        </div>
        <div className="mb-2">and I am a passionate</div>
        <div className="mb-2">
          <span ref={el} className="text-purple-700" />
        </div>
        <div className="btn mt-10 sm:my-18 mx-2 flex gap-3 lg:gap-5 text-gray-300 text-[14px] sm:text-[16px] lg:text-[20px]">
          <button className="border-2 border-gray-400 px-3 lg:px-4 py-3 rounded-md bg-[#202468] cursor-pointer"><a href="./resume.pdf" download={"resume"}>Download Resume</a></button>
          <Link href={"https://github.com/Ramash7076?tab=repositories"}><button className="border-2 border-gray-400 px-3 lg:px-4 py-3 rounded-md bg-[#202468] cursor-pointer">Visit Projects</button></Link>
        </div>
      </div>

      <div className="second w-[70vw] mx-auto sm:mx-0 sm:w-[50%] lg:w-[40%] opacity-80">
        <Image
          src="/bg-page.png"
          width={250}
          height={300}
          alt="background image"
          priority
          className="lg:w-80 w-52 h-70 lg:h-100 rounded-md"
        />
      </div>
    </section>

    {/* for tablet and desktop */}

    <div className="hr bg-gray-400 h-0.5 opacity-30 w-[90vw] sm:w-[85vw] mx-auto rounded-md"></div>

    <section className="w-[82vw] mx-auto my-8">
      <h4 className="text-[12px] text-gray-600 my-1">What I have done so far</h4>
      <h1 className="text-2xl font-semibold">Work Experience</h1>
      <div className="my-8 hidden sm:block">
        <div className="flex justify-around items-end my-2">
          <div className="ml-2"><img height={20} width={23} src="/html.png" alt="html" className="object-contain" /></div>
          <div className="ml-4"><img height={20} width={23} src="/css.png" alt="css" className="object-contain" /></div>
          <div className="ml-4"><img height={20} width={23} src="/javascript.png" alt="javascript" className="object-contain" /></div>
          <div className=""><img height={20} width={45} src="/nodejs.png" alt="nodejs" className="object-contain" /></div>
          <div className=""><img height={20} width={30} src="/react.png" alt="react" className="object-contain" /></div>
          <div><img height={20} width={45} src="/nextjs.png" alt="nextjs" className="object-contain" /></div>
        </div>
        <div className="hr bg-gray-400 h-0.5 opacity-80 w-[80vw] rounded-md"></div>
        <div className="flex justify-around">
          <div className="vr bg-gray-400 w-[3px] opacity-80 h-30 rounded-b-md"></div>
          <div className="vr bg-gray-400 w-[3px] opacity-80 h-30 rounded-b-md"></div>
          <div className="vr bg-gray-400 w-[3px] opacity-80 h-30 rounded-b-md"></div>
          <div className="vr bg-gray-400 w-[3px] opacity-80 h-30 rounded-b-md"></div>
          <div className="vr bg-gray-400 w-[3px] opacity-80 h-30 rounded-b-md"></div>
          <div className="vr bg-gray-400 w-[3px] opacity-80 h-30 rounded-b-md"></div>
        </div>
        <div className="flex justify-around gap-2 lg:gap-10 mb-22">
          <div className="flex wrap-break-word flex-col ml-4">
            <div className="text-center">HTML</div>
            <div className="desc text-[9px] text-gray-600 my-1 ml-4">
              <div>The foundation of all web pages.</div>
              <div>I use HTML to structure content and ensure accessibility and SEO optimization across my projects.</div>
            </div>
          </div>
          <div className="flex wrap-break-word flex-col">
            <div className="text-center">CSS</div>
            <div className="desc text-[9px] text-gray-600 my-1 ml-4">
              <div>Responsible for styling and visual design.</div>
              <div>I create responsive, modern layouts using CSS Flexbox, Grid, and animations for smooth user experiences.</div>
            </div>
          </div>
          <div className="flex wrap-break-word flex-col">
            <div className="text-center">JavaScript</div>
            <div className="desc text-[9px] text-gray-600 my-1 ml-4">
              <div>Adds interactivity and logic to web applications.</div>
              <div>I use JavaScript for DOM manipulation, API integration, and creating dynamic, data-driven interfaces.</div>
            </div>
          </div>
          <div className="flex wrap-break-word flex-col ">
            <div className="text-center">Node.js</div>
            <div className="desc text-[9px] text-gray-600 my-1 ml-6">
              <div>Server-side JavaScript runtime.</div>
              <div>I build RESTful APIs and backend logic using Node.js and integrate with databases like MongoDB.</div>
            </div>
          </div>
          <div className="flex wrap-break-word flex-col">
            <div className="text-center">React</div>
            <div className="desc text-[9px] text-gray-600 my-1 ml-7">
              <div>A powerful JavaScript library for building UIs.</div>
              <div>I develop modular, component-based applications using React Hooks and state management libraries.</div>
            </div>
          </div>
          <div className="flex wrap-break-word flex-col mr-4">
            <div className="text-center">Next.js</div>
            <div className="desc text-[9px] text-gray-600 my-1 ml-5">
              <div>A full-stack React framework.</div>
              <div>I build fast, SEO-friendly web apps with server-side rendering (SSR), API routes, and dynamic routing.</div>
            </div>
          </div>
        </div>
      </div>

      {/* for Phone */}
      <div className="my-8 sm:hidden flex">

        <div className="flex flex-col justify-around mx-2">
          <div><img height={20} width={23} src="/html.png" alt="html" className="object-contain" /></div>
          <div><img height={20} width={23} src="/css.png" alt="css" className="object-contain" /></div>
          <div className="mb-2"><img height={20} width={23} src="/javascript.png" alt="javascript" className="object-contain" /></div>
          <div className="mb-2"><img height={20} width={50} src="/nodejs.png" alt="nodejs" className="object-contain" /></div>
          <div className="mb-3"><img height={20} width={30} src="/react.png" alt="react" className="object-contain" /></div>
          <div className="mb-3"><img height={40} width={70} src="/nextjs.png" alt="nextjs" className="object-contain" /></div>
        </div>

        <div className="vr bg-gray-400 w-1 opacity-80 h-120 o rounded-md"></div>

        <div className="flex flex-col justify-around">
          <div className="hr bg-gray-400 h-0.5 opacity-80 w-[10vw]  rounded-r-md"></div>
          <div className="hr bg-gray-400 h-0.5 opacity-80 w-[10vw]  rounded-r-md"></div>
          <div className="hr bg-gray-400 h-0.5 opacity-80 w-[10vw]  rounded-r-md"></div>
          <div className="hr bg-gray-400 h-0.5 opacity-80 w-[10vw]  rounded-r-md"></div>
          <div className="hr bg-gray-400 h-0.5 opacity-80 w-[10vw]  rounded-r-md"></div>
          <div className="hr bg-gray-400 h-0.5 opacity-80 w-[10vw]  rounded-r-md"></div>
        </div>
        <div className="flex flex-col justify-around text-sm">
          <div className="mx-2">HTML</div>
          <div className="mx-2">CSS</div>
          <div className="mx-2">JavaScript</div>
          <div className="mx-2">Node.js</div>
          <div className="mx-2">React</div>
          <div className="mx-2">Next.js</div>
        </div>
        <div className="flex flex-col justify-around gap-2">
          <div className="desc text-[9px] text-gray-600 mx-2">
            <div>The foundation of all web pages.</div>
            <div>I use HTML to structure content and ensure accessibility and SEO optimization across my projects.</div>
          </div>
          <div className="desc text-[9px] text-gray-600 mx-2">
            <div>Responsible for styling and visual design.</div>
            <div>I create responsive, modern layouts using CSS Flexbox, Grid, and animations for smooth user experiences.</div>
          </div>
          <div className="desc text-[9px] text-gray-600 mx-2">
            <div>Adds interactivity and logic to web applications.</div>
            <div>I use JavaScript for DOM manipulation, API integration, and creating dynamic, data-driven interfaces.</div>
          </div>
          <div className="desc text-[9px] text-gray-600 mx-2">
            <div>Server-side JavaScript runtime.</div>
            <div>I build RESTful APIs and backend logic using Node.js and integrate with databases like MongoDB.</div>
          </div>
          <div className="desc text-[9px] text-gray-600 mx-2">
            <div>A powerful JavaScript library for building UIs.</div>
            <div>I develop modular, component-based applications using React Hooks and state management libraries.</div>
          </div>
          <div className="desc text-[9px] text-gray-600 mx-2">
            <div>A full-stack React framework.</div>
            <div>I build fast, SEO-friendly web apps with server-side rendering (SSR), API routes, and dynamic routing.</div>
          </div>

        </div>

      </div>

    </section>
  </>
  );
}

