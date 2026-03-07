import Profile from "../assets/Fav_bg.jpeg";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const skills = [
    "Frontend Developer",
    "Data Scientist",
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[currentIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentSkill.substring(0, displayText.length + 1));

        if (displayText === currentSkill) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentSkill.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, skills]);


  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="order-2 md:order-1 space-y-6">

          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Get To Know Me
          </p>
          {/* Skills Type Writer */}
          <div className="flex justify-center md:justify-start mt-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              I am a{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Jnanendra
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            A passionate Computer Science Engineering student focused on building
            scalable web applications and intelligent machine learning systems.
            I love solving complex problems and transforming ideas into real-world
            digital solutions.
          </p>

          {/* Skills */}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:text-black active:scale-95 transition-transform duration-500 shadow-md shadow-cyan-400 hover:shadow-blue-500/90"
            >
              View Projects
            </a>

            <a
              href="/Jnanendra_Robbi_Resume.pdf"
              download="Jnanendra_Robbi_Resume.pdf"
              className="relative inline-block px-6 py-3 rounded-full border border-cyan-400 
                hover:bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                hover:text-black hover:scale-105 active:scale-95 
                transition-all duration-500 shadow-md hover:shadow-blue-500/90 overflow-hidden"
            >
              {/* Animated Background Glow */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r 
                   from-cyan-500 via-blue-500 to-purple-600 
                   animate-spin opacity-20 blur-sm"></span>

              {/* Text */}
              <span className="relative z-10">View Resume</span>
            </a>

          </div>
          <div className="flex flex-row gap-10 justify-center items-center text-lg text-white">
            <a href="https://github.com" target="_blank" className="hover:text-blue-500 rounded-full hover:scale-110 active:95 hover:shadow-lg shadow-cyan-400 hover:shadow-blue-500 transition-all duration-500">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-500 hover:scale-110 active:95 hover:shadow-lg shadow-cyan-400 hover:shadow-blue-500  transition-all duration-500">
              <FaLinkedin size={30} />
            </a>
          </div>

        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group w-[70%] max-w-md aspect-square">

            {/* Rotating Gradient Border */}
            <div className="absolute inset-0 rounded-full p-[4px] animate-spin bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>

            {/* Image Container (IMPORTANT) */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden z-10">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-40 rounded-full transition-all duration-500 group-hover:opacity-70"></div>
            <div className="absolute inset-[6px] rounded-full bg-gradient-to-b from-black/70 via-black/60 to-black/80 
              flex items-center justify-center
              opacity-0 scale-95
              transition-all duration-500
              group-hover:opacity-100 group-hover:scale-100 z-20 group-hover:scale-102">

              <div className="text-center text-white px-6">
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                  Full Stack Developer
                </h3>
                <p className="text-sm md:text-base text-gray-300 mt-2">
                  Data Scientist
                </p>
              </div>

            </div>
          </div>
        </div>
       
      </div>

    </section>
  );
};

export default About;