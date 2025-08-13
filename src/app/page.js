"use client";


import { FaGithub, FaLinkedin,  FaFacebookSquare } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Projects from "@/components/Project";
import Contact from "./contact/page";
import AboutPage from "./about/page";
export default function Home() {
  return (
    <>
    <section    name="home"   className="min-h-screen flex items-center justify-center  px-6">
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-6">

        {/* Right Side - Text */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
           {"Hi I'm   "}
            <span
              className=""
            >
              Naimul 
            </span>
          </h1>
          <h2 className="text-5xl text-gray-300 mt-2">Frontend Developer</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I build responsive, modern, and user-friendly web applications.
          </p>


          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="https://github.com/NaimuL295" target="_blank">
              <FaGithub className=" transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/naimul-hasan-42316b2a6/?trk=opento_sprofile_details" target="_blank">
              <FaLinkedin className=" transition"  />
            </Link>
            <Link href="https://www.facebook.com/arefin.sourov.566" >
              <FaFacebookSquare className=" transition text-blue-400 bg-white" />
            </Link>
          </motion.div>
        </motion.div>
        {/* Left Side - Image */}
<motion.div
  className="flex-1 flex justify-center"
  initial={{ opacity: 0, y: 80, scale: 1.1, filter: "blur(10px)" }}
  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    <Image
      src="/naimul.jpg"
      alt="Profile"
      width={388}
      height={388}
      className=" bg-cover bg-center rounded-full border-2 border-black shadow-2xl relative z-10"
    />
  </motion.div>
</motion.div>


      </div>
    </section>
   <section name="about" >
      <AboutPage></AboutPage>
      </section>

       <section name="portfolio" >
          <Projects/>
      </section>
        <section name="contact" >
       <Contact/>
      </section>
    </>
  );
}
