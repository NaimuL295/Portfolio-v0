
import Navbar from "@/components/Navbar";
import "./globals.css";

import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Naimul Hasan - MERN Stack Developer",
  description: "Professional portfolio showcasing MERN stack development,  and full-stack services. Available for freelance and full-time opportunities.",
};
const poppins = Poppins({
  weight: ["400", "500", "700"], 
  subsets: ["latin"],           
  display: "swap",          
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" >
  <body className={poppins.className}>
     
        <div className="sticky top-0 z-40 "><Navbar></Navbar>   </div>
        <div className="min-h-[calc(100vh-300px)]"  >  {children}</div>
     <Footer/>
      </body>
    </html>
  );
}
