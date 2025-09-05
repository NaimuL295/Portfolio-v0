
"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import DownloadCVButton from "./ButtonPage";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", url: "home" },
    { title: "About", url: "about" },
    { title: "Projects", url: "projects" },
    { title: "Contact", url: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-40   text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
      
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-wide">Naimul</span>
        </div>

      
        <ul className="hidden lg:flex gap-10">
          {links.map((link, idx) => (
            <li key={idx}>
              <ScrollLink
                to={link.url}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-cyan-400 font-semibold"
                className="cursor-pointer hover:text-cyan-400 transition text-lg"
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

   
        <div className="hidden lg:block">
          <DownloadCVButton />
        </div>

       
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
    
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          />
        
          <div className="bg-gray-900 text-white max-w-[61.8%] w-full p-7 space-y-6 shadow-2xl">
            <button
              className="text-gray-400 hover:text-white mb-6"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>
            <ul className="space-y-5">
              {links.map((link, idx) => (
                <li key={idx}>
                  <ScrollLink
                    to={link.url}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="text-cyan-400 font-semibold"
                    className="cursor-pointer hover:text-cyan-400 transition text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <DownloadCVButton />
          </div>
        </div>
      )}
    </nav>
  );
}
