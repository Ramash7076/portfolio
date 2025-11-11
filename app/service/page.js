"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaVideo } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-5xl block sm:hidden lg:block text-[#28167a] " />,
      title: "Web Development",
      description:
        "I build fast, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React/Next.js. My focus is on clean design and smooth user experience.",
    },
    {
      icon: <FaPaintBrush className="text-5xl block sm:hidden lg:block text-[#28167a] " />,
      title: "Web Design",
      description:
        "I create visually appealing and functional web designs with attention to detail, ensuring a modern look that aligns with client goals.",
    },
    {
      icon: <FaVideo className="text-5xl block sm:hidden lg:block text-[#1a0869] " />,
      title: "Video Editing",
      description:
        "I edit videos with professional transitions, sound design, and storytelling flow — suitable for YouTube, social media, and presentations.",
    },
  ];

  return (
    <section className="px-16 py-12 sm:h-[73vh] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-800 mb-8"
      >
        My Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
      >
        Here’s what I love to do — bringing creativity and technology together
        to deliver meaningful digital experiences.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-4 lg:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-300 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <h2 className="text-2xl flex gap-4 justify-center items-center font-semibold text-[#28167a] mb-3">
            {service.icon} {service.title}
            </h2>
            <p className="text-gray-700 leading-7">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
