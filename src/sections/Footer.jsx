import React from "react";
import Logo from "../assets/Logo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaCode, FaProjectDiagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: "About", href: "#about" , icon : <FaUser />},
    { name: "Skills", href: "#skills" , icon : <FaCode />},
    { name: "Projects", href: "#projects" , icon : <FaProjectDiagram />},
    { name: "Contact", href: "#contact" , icon : <FaEnvelope />},
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/JNANENDRA742",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Brand Section */}
          <div>
            <a href="#home" className="relative w-fit flex items-center justify-center md:justify-start mb-4 group">
              <img src={Logo} alt="Logo" className="w-10 h-10 group-hover:rotate-6 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NANENDRA
              </span>
              <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-500'></span>
              
            </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Passionate Full Stack Developer building modern, scalable and
              beautiful web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Quick Links
            </h3>

            <ul className="space-y-3 ">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className=" text-gray-400 flex flex-wrap flex-row gap-2 items-center hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 "
                  >
                    {link.icon} <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Connect With Me
              
            </h3>
              
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 animate-bounce"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="mailto:jnanendrarobbi@gmail.com"
              className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-white hover:translate-x-2  transition-all duration-300"
            >
              <FaEnvelope />
              jnanendrarobbi@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-col gap-4 justify-between items-center text-gray-500 text-sm ">
          <p className="hover:text-white">
            © {year} Jnanendra. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0 hover:text-white">
            Built with <span className="text-red-500 animate-pulse">❤️</span> by JNANENDRA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;