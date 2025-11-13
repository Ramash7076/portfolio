import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: "400"
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ramash Halder | Web Developer, Designer & Video Editor",
  description:
    "Hi, I'm Ramash Halder — a passionate Web Developer, Web Designer, and Video Editor from Kolkata, India. I build modern, responsive websites with clean UI/UX and powerful functionality. Explore my projects, skills, and contact me for collaboration or freelance work.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased text-white bg-[#282830] `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

