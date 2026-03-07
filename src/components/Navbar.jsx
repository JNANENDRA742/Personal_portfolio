import React, { useState, useEffect } from "react";
import { FaBars, FaLinkedin, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercent =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      setScrollProgress(scrollPercent);
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",  // It makes the active detection zone only the CENTER of the screen. So a section becomes active only when it reaches the middle of the screen.
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  const links = [
    { name: "About", link: "about", icon: <FaUser className="text-xl" /> },
    { name: "Skills", link: "skills", icon: <FaCode className="text-xl" /> },
    { name: "Projects", link: "projects", icon: <FaProjectDiagram className="text-xl" /> },
    { name: "Contact", link: "contact", icon: <FaEnvelope className="text-xl" /> },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`w-full md:fixed sm:static top-0 left-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/50"
        : "bg-black/40 backdrop-blur-md"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 text-white">


          {/* Scroll Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left transition-transform duration-200 ease-out"
              style={{
                transform: `scaleX(${scrollProgress / 100})`,
              }}
            ></div>
          </div>


          {/* Logo */}
          <div className="font-bold">
            <a
              href="/"
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative">
                <img src={Logo} className="w-10 h-10 rounded-full ring-2 ring-cyan-400/50 group-hover:ring-cyan-400 transition-all duration-300" alt="Logo" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NANENDRA
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-base">
            {links.map((link, index) => (
              <li key={index} className="list-none">
                <a
                  href={`#${link.link}`}
                  className={`
                    relative px-2 py-1 transition-all duration-300
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-2
                    after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-cyan-500 after:via-blue-500 after:to-purple-600
                    after:transition-all after:duration-300
                    hover:after:w-full
                    cursor-pointer
                    ${activeLink === link.link
                      ? "text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text"
                      : "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text"
                    }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* LinkedIn Button - Desktop */}
          <a
            href="https://www.linkedin.com/in/jnanendra-robbi-ba0368325/"
            target="_blank"
            className="hidden lg:flex items-center gap-3 
              border border-cyan-400/30 px-5 py-2 rounded-full 
              hover:border-cyan-400 transition-all duration-300 
              shadow-lg hover:shadow-cyan-400/20
              bg-gradient-to-r from-transparent via-transparent to-transparent
              hover:from-cyan-500/10 hover:via-blue-500/10 hover:to-purple-600/10
              group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <FaLinkedin size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 animate-bounce" />
            <span className="font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Let's Connect
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md opacity-0 ${isMenuOpen ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}></div>
            {isMenuOpen ? (
              <MdClose className="text-3xl text-white relative z-10 animate-spin-once" />
            ) : (
              <FaBars className="text-3xl text-white relative z-10 hover:text-cyan-400 transition-colors duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-gradient-to-b from-gray-900 to-gray-950 z-40 shadow-2xl lg:hidden transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src={Logo} className="w-10 h-10 rounded-full ring-2 ring-cyan-400" alt="Logo" />
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NANENDRA
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
          >
            <FaTimes className="text-xl text-gray-400" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.link}`}
                  onClick={() => handleLinkClick(link.link)}
                  className={`
                    group flex items-center gap-4 p-4 rounded-xl
                    transition-all duration-300 relative overflow-hidden
                    ${activeLink === link.link
                      ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 border border-cyan-400/30"
                      : "hover:bg-white/5 border border-transparent"
                    }
                  `}
                >
                  {/* Icon with gradient */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    transition-all duration-300
                    ${activeLink === link.link
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110"
                    }
                  `}>
                    {link.icon}
                  </div>

                  {/* Link text */}
                  <div className="flex-1">
                    <span className={`
                      text-lg font-semibold transition-colors duration-300
                      ${activeLink === link.link
                        ? "text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"
                        : "text-gray-300 group-hover:text-white"
                      }
                    `}>
                      {link.name}
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {getLinkDescription(link.name)}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeLink === link.link && (
                    <div className="absolute right-4 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LinkedIn Button - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950 to-transparent">
          <a
            href="/"
            className="group relative flex items-center justify-center gap-3 w-full
              border border-cyan-400/30 px-6 py-4 rounded-xl 
              hover:border-cyan-400 transition-all duration-300 
              bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10
              overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <FaLinkedin size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Connect on LinkedIn
            </span>
          </a>

          {/* Footer text */}
          <p className="text-center text-xs text-gray-600 mt-4">
            © 2026 Jnanendra. All rights reserved.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-once {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
        
        .animate-spin-once {
          animation: spin-once 0.5s ease-out;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .menu-item {
          animation: slideIn 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .menu-item:nth-child(1) { animation-delay: 0.1s; }
        .menu-item:nth-child(2) { animation-delay: 0.15s; }
        .menu-item:nth-child(3) { animation-delay: 0.2s; }
        .menu-item:nth-child(4) { animation-delay: 0.25s; }
        .menu-item:nth-child(5) { animation-delay: 0.3s; }
      `}</style>
    </>
  );
};

// Helper function for link descriptions
const getLinkDescription = (linkName) => {
  switch (linkName) {
    case "Home": return "Welcome to my portfolio";
    case "About": return "Learn about my journey";
    case "Skills": return "Technologies I work with";
    case "Projects": return "View my recent work";
    case "Contact": return "Get in touch with me";
    default: return "";
  }
};

export default Navbar;