"use client";

import { portfolioItems } from "@/app/data/portfolioItems";
import Link from "next/link";

export default function Slide() {
  return (
    <div className="flex overflow-x-auto gap-6 p-4">
      {portfolioItems.map((item) => (
        <div
          key={item.id}
          className="min-w-[600px] bg-gray-800 p-4 rounded-lg text-white shadow-lg"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full lg:h-[300px] h-48 object-cover rounded"
          />

          {/* Title */}
          <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

          {/* Description */}
          <p className="text-gray-400 mt-2">{item.description}</p>

          {/* Features */}
          {item.features && item.features.length > 0 && (
            <ul className="mt-3 list-disc list-inside text-gray-300 text-sm">
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          {item.tech && item.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="btn  px-2 py-1 text-xs bg-gray-700 rounded"
                >
                  <li> {tech}</li>
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            {item.link && (
              <Link href={item.link} target="_blank">
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  Live Demo
                </button>
              </Link>
            )}
            {item.git && (
              <Link href={item.git} target="_blank">
                <button className="px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-black transition">
                  GitHub
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
