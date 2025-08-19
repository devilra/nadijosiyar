import React, { useState } from "react";

import { Menu } from "lucide-react"; // install lucide-react
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Mobile Buttons */}
      <div className="flex md:hidden justify-around p-2 bg-[#ffa600] fixed top-0 left-0 w-full z-50 shadow-md">
        <a
          href="tel:+919094662055"
          className="bg-[#ffa601] text-white px-3 py-2 rounded-full text-xs font-semibold">
          📞 Call Us Now
        </a>
        <a
          href="https://wa.me/919094662055"
          className="bg-green-500 text-white px-3 py-2 rounded-full text-xs font-semibold">
          💬 WhatsApp Now
        </a>
      </div>

      {/* Navbar */}

      <header className="bg-white shadow-md fixed md:relative top-[45px] md:top-0 left-0 w-full  z-40">
        <div className=" bg-red-700 fixed w-full md:relative md:bg-[#ffa600] p-5 flex justify-between items-center px-4 py-5">
          {/* Logo */}
          <div className="flex items-center  space-x-2">
            <img src="/logo.png" alt="logo" className="h-10" />
            <h1 className="text-white  font-bold text-lg">
              NADI CONSULTANT SERVICE
            </h1>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <p>
              Email:{" "}
              <span className="font-semibold">info@astrologypredict.com</span>
            </p>
            <p>
              Call: <span className="font-semibold">+91 9094 66 20 55</span>
            </p>
            <button className="bg-white text-black px-3 py-1 rounded-md">
              Consult Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Navbar Links */}
        <nav
          className={`bg-red-700 p-5 text-white text-sm md:text-base md:block ${
            menuOpen ? "block" : "hidden"
          }`}>
          <ul className="flex flex-col md:flex-row flex-wrap justify-center md:justify-center md:gap-10 gap-4 px-4 py-2">
            <NavLink>
              <li>Home</li>
            </NavLink>
            <NavLink>
              <li>About Astrologer</li>
            </NavLink>
            <NavLink>
              <li>Nadi Astrology</li>
            </NavLink>
            <NavLink>
              <li>Nadi Chapters</li>
            </NavLink>
            <NavLink>
              <li>Online Nadi Reading</li>
            </NavLink>
            <NavLink>
              <li>Media Gallery</li>
            </NavLink>
            <NavLink>
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}
