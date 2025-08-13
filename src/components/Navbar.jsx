// 'use client'
// import Link from 'next/link'
// import DownloadCVButton from './ButtonPage'


// const links = [
//   {url: "/", title: "Home"},
//   {url: "/about", title: "About Me"},
//   {url: "/portfolio", title: "Portflio"},
//   {url: "/contact", title: "Contact"},
// ]

// const Navbar = () => {

//   return (
// <div className="navbar bg-base-100 shadow-sm text-xl">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//     {links.map((link,index )=>(
               
//              <li key={index} >   <Link href={link.url}>{link.title}</Link></li>
              
//               ))}
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//              {links.map((link,index )=>(
               
//              <li key={index} >   
//              <Link href={link.url}>{link.title}</Link></li>
              
               
//               ))}
//     </ul>
//   </div>
//   <div className="navbar-end">
//    <DownloadCVButton></DownloadCVButton>
//   </div>
// </div>
//   )
// }

// export default Navbar
'use client'
import { Link } from "react-scroll";
import DownloadCVButton from './ButtonPage'
import Image from "next/image";

const links = [
  { url: "home", title: "Home" },
  { url: "about", title: "About Me" },
  { url: "projects", title: "Projects" },
  { url: "contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm text-2xl">
      
      <div className="navbar-start">
       
<Link href="/" className=""> <Image 
  src="/download (1).png" 
  width={32} 
  height={32} 
  alt="Example"
  className="bg-white rounded-full"
/></Link>
        <span className="btn btn-ghost text-xl text-white">Naimul.dev</span>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <DownloadCVButton />
      </div>
       <div className="dropdown">
          
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
         
          </ul>
        </div> 
{/*  */}
<div className="  drawer-end">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
<label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
  </svg>
</label>
</div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
         {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                >
                  {link.title}
                </Link>
              </li>
            ))}
    </ul>
  </div>
</div>
{/*  */}

    </div>
  );
};

export default Navbar;
