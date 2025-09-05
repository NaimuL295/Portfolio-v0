"use client";

import Link from "next/link";
import { portfolioItems } from "@/app/data/portfolioItems";
import { motion } from "framer-motion";

export default function Projects() {
  return (
//     <section   id="projects" className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

//         <div className="flex flex-col gap-16">
//           {portfolioItems.map(
//             ({ id, title, image, description, link, tech, features }, index) => {
//               const isEven = index % 2 === 1; 

//               return (
//                 <motion.div
//                   key={id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className={`flex flex-col md:flex-row items-center gap-8 ${
//                     isEven ? "md:flex-row-reverse" : ""
//                   }`}
//                 >
//                   {/* Image */}
//                   <div className="flex-1">
//                     <img
//                       src={image}
//                       alt={title}
//                   className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-lg transition-transform hover:scale-105"
// />
                    
//                   </div>

//                   <div className="flex-1 max-w-xl">
//                     <h3 className="text-2xl font-semibold ">{title}</h3>
//                     <p className="mt-4 ">{description}</p>

//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {tech.map((t) => (
//                         <span
//                           key={t}
//                           className="  text-xs px-2 py-1 rounded"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>

//                     <ul className="mt-4 list-disc list-inside  text-sm">
//                       {features.map((feature, i) => (
//                         <li key={i}>{feature}</li>
//                       ))}
//                     </ul>

//                     <div className="mt-6 flex flex-wrap gap-4">
//                       <a
//                         href={link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:underline text-sm font-semibold"
//                       >
//                         View Live Project &rarr;
//                       </a>

//                       {/* <Link href={`/projects/${id}`}>
//                         <button className=" text-white px-4 py-2 rounded  text-sm font-semibold">
//                           View More / Details
//                         </button>
//                       </Link> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             }
//           )}
//         </div>
//       </div>
//     </section>



    <section id="projects" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        <div className="flex flex-col gap-24">
          {portfolioItems.map(
            ({ id, title, image, description, link, tech, features }, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-12 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image: 61.8% width */}
                  <div className="md:basis-[61.8%] flex-shrink-0">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-72 object-cover rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-purple-500/40"
                    />
                  </div>

                  {/* Text: 38.2% width */}
                  <div className="md:basis-[38.2%] max-w-lg">
                    <h3 className="text-2xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tech.map((t) => (
                        <span
                          key={t}
         className="bg-gradient-to-r from-gray-500 to-slate-400 text-white text-xs px-3 py-1 rounded-full shadow-sm"
   >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <ul className="mt-4 list-disc list-inside text-sm text-gray-400">
                      {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-cyan-400 text-sm font-semibold"
                      >
                        View Live Project &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
