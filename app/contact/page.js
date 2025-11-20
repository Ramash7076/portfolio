"use client";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const router = useRouter()

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your Message was sent successfully.", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
          transition: Bounce,
        });

        setTimeout(() => router.push("/"), 2000);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });
    }

    setForm({ name: "", email: "", message: "" });
  };


  return (
    <><ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
      <section className="px-16 py-12 flex flex-col items-center gap-6">

        <h1 className="text-4xl font-bold text-purple-800">Contact Me</h1>
        <p className="text-lg text-gray-500">
          Let’s connect! Feel free to send a message or reach me directly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4 mt-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border text-sm p-3 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border text-sm p-3 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="border text-sm p-3 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-500">
          <p><b>Email:</b> ramash7076@gmail.com</p>
          <p><b>Phone:</b> +91 95645 22231</p>
          <p><b>Location:</b> Kolkata, West Bengal</p>
        </div>
      </section></>
  );
}
