'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Typewriter } from 'react-simple-typewriter'
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
export default function Contact() {
    const [copied, setCopied] = useState("");
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
 useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
      mirror: true
    });
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  form,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
).then(() => {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }).catch((err) => {
      alert("Failed to send message");
      console.error(err);
    }).finally(() => {
      setSending(false);
    });
  };

  return (
    <>
    <h1 className="text-2xl font-extrabold  text-center mb-12">Contact Me</h1>
   <section  className="    lg:flex    flex-col items-center px-4">
      <div 
   data-aos="fade-up"
     data-aos-duration="3000"
      className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

         {/* Form Side */}
      
          <div 
          className="w-full md:w-1/2" >
             <div >
          <form onSubmit={handleSubmit} className=" p-2 rounded-lg shadow-md">
            

            {success && (
              <p 
               
                className="text-green-600 text-center mb-4"
              >
                Message sent successfully!
              </p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2  "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 "
            />

            <motion.button
              type="submit"
className="  px-6 py-3 rounded-lg text-white font-semibold  hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition"
disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>

{/*  */}


{/*  */}
          </form>
        </div>

       </div>
        {/* Animation Side */}
    



    <div className="w-full md:w-1/2">
      <div
        data-aos=""
        className="rounded-2xl shadow-lg p-8 border border-gray-200 space-y-8"
      >
        <h1 className="text-3xl font-bold">
          I{" "}
          <span>
            <Typewriter
              words={["Let’s bring your ideas to life — get in touch!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <ul className="space-y-6 text-lg">
          <li className="flex items-center gap-3">
            <MdEmail className="text-red-500 text-2xl" />
            <div>
              <strong>Email: </strong>
              <span
                onClick={() => copyToClipboard("nayemk295@gmail.com", "Email")}
                className="hover:underline cursor-pointer"
                title="Click to copy"
              >
                nayemk295@gmail.com
              </span>
              {copied === "Email" && (
                <span className="ml-2 text-green-600 font-semibold">
                  Copied!
                </span>
              )}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <div>
              <strong>Phone: </strong>
              <span
                onClick={() => copyToClipboard("01829095072", "Phone")}
                className="hover:underline cursor-pointer"
                title="Click to copy"
              >
                01829095072
              </span>
              {copied === "Phone" && (
                <span className="ml-2 text-green-600 font-semibold">
                  Copied!
                </span>
              )}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <div>
              <strong>WhatsApp: </strong>
              <span
                onClick={() => copyToClipboard("01829095072", "WhatsApp")}
                className="hover:underline cursor-pointer"
                title="Click to copy"
              >
                +880 01829095072
              </span>
              {copied === "WhatsApp" && (
                <span className="ml-2 text-green-600 font-semibold">
                  Copied!
                </span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>



       
      </div>
    </section>
    </>
  );



}

