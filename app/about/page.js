"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-16 py-12 flex flex-col gap-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-800"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg leading-8 text-gray-400"
      >
        I’m <b>Ramash Halder</b>, a passionate learner and aspiring engineer with a
        background in <b>Electronics and Communication Engineering</b> from
        <b> Swami Vivekananda Institute of Science and Technology</b> (CGPA: 7.19).
        I love solving problems and building creative solutions through web development,
        programming, and emerging technologies.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Technical Skills</h2>
          <ul className="list-disc ml-6 text-gray-400">
            <li>C, Java, Python</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Project Management</li>
            <li>Teamwork & Leadership</li>
            <li>Critical Thinking</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Education</h2>
          <ul className="list-disc ml-6 text-gray-400">
            <li>B.Tech in Electronics & Communication — SVIST, CGPA 7.19</li>
            <li>Class XII — West Bengal Board, 84.2%</li>
            <li>Class X — West Bengal Board, 85.28%</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-2">Project</h2>
        <p className="text-gray-400 leading-8">
          <b>Calories Burn Prediction Using Machine Learning:</b> A Python-based project
          that predicts the number of calories burned during physical activities using
          supervised learning algorithms based on user features like age, weight, and
          heart rate.
        </p>
      </div>
    </section>
  );
}


