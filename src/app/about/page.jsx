"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {


useEffect(() => {
  AOS.init({
    duration: 900, // speed of animation
    once: true,    // run only once
  });
}, []);






const skills = [
  { name: "HTML", src: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS", src: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "Tailwind CSS", src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", className: "bg-white p-3 rounded-xl" },
  { name: "JavaScript", src: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "React", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Firebase", src: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { name: "Node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", className: "bg-white p-1 rounded-xl" },
  { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", className: "bg-white p-1 rounded-xl" },
  { name: "MongoDB", src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", className: "bg-white p-2 rounded-xl" },
];





  return (
    <>
   <section className="min-h-screen flex items-center justify-center px-6 py-12">
  <div data-aos="fade-up" >
    <div className="max-w-4xl text-center">
      <h1 className="text-2xl md:text-3xl font-bold">About Me</h1>

   <p className="text-lg leading-relaxed mb-6">
  Hello! I’m <span className="font-semibold">Naimul</span>, a passionate Frontend Developer.
  My journey into web development started from a curiosity about how the websites I use every day are made.
  I wanted to create experiences that are not only visually appealing but also meaningful and easy to use.<br /><br />
  Over time, that curiosity grew into a deep passion for building interactive, modern, and responsive web applications.
  I enjoy solving problems and bringing creative ideas to life through code.
  For me, web development is the perfect balance of creativity and logic.
</p>

    
    </div>
  </div>
</section>

   <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-12">My Skills</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-10 max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={44}
                height={44}
                className={skill.className || ""}
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
 
</>

  );
}
