import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-4 md:py-10">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} nadisaptarishi.com. All rights reserved.{" "}
        </p>

        {/* Center - Links */}
        <ul className="flex flex-wrap items-center gap-5 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Predictions Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Refund
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Disclaimer
            </a>
          </li>
        </ul>

        {/* Right - Social & Location */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-xl hover:text-gray-800" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-xl hover:text-gray-800" />
          </a>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span className="text-sm">Chennai, India</span>
          </div>
        </div>
      </div>
      <h1 className="text-[13px] text-center py-3 px-2">
        Develop by <span className="font-bold">amigowebster</span>
      </h1>
    </footer>
  );
};

export default Footer;
