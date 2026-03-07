
import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJava, 
  FaCode, FaBrain, FaLeanpub, FaToolbox, FaServer 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPhp, SiMysql, SiNodedotjs, SiC, 
  SiCplusplus, SiPython, SiTypescript, SiNextdotjs, SiMongodb 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  // Frontend Skills
  const frontEnd = [
    { name: "HTML", icon: <FaHtml5 size={30} className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt size={30} className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs size={30} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={30} className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} className="text-sky-400" /> },
    // { name: "TypeScript", icon: <SiTypescript size={30} className="text-blue-500" /> },
    // { name: "Next.js", icon: <SiNextdotjs size={30} className="text-gray-400" /> }
  ];

  // Backend Skills
  const backEnd = [
    { name: "PHP", icon: <SiPhp size={30} className="text-indigo-500" /> },
    { name: "MySQL", icon: <SiMysql size={30} className="text-blue-700" /> },
    { name: "Node.js", icon: <SiNodedotjs size={30} className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={30} className="text-green-600" /> },
  ];

  // Programming Languages
  const languages = [
    { name: "C", icon: <SiC size={30} className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus size={30} className="text-blue-600" /> },
    { name: "Java", icon: <FaJava size={30} className="text-red-500" /> },
    { name: "Python", icon: <SiPython size={30} className="text-yellow-500" /> },
  ];

  // Specialized Skills
  const specializedSkills = [
    { name: "Data Science", icon: <FaBrain size={30} className="text-pink-500" /> },
    { name: "Machine Learning", icon: <FaLeanpub size={30} className="text-purple-500" /> }
  ];

  // Problem Solving Platforms
  const problemSolving = [
    { name: "LeetCode", icon: <FaCode size={30} className="text-yellow-500" /> },
    { name: "GeekForGeeks", icon: <FaCode size={30} className="text-green-500" /> }
  ];

  // Tools
  const tools = [
    { name: "Git", icon: <FaGitAlt size={30} className="text-orange-500" /> },
    { name: "VS Code", icon: <VscVscode size={30} className="text-blue-400" /> },
  ];

  // Marquee Skills (All skills combined for scrolling)
  const marqueeSkills = [...frontEnd, ...backEnd, ...languages, ...specializedSkills, ...tools];

  // Card component to avoid repetition
  const SkillCard = ({ title, skills, icon: TitleIcon }) => (
    <div className="group/card relative p-6 rounded-xl border border-gray-700 
      bg-black backdrop-blur-sm
      transition-all duration-500 hover:scale-105
      hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
      hover:border-cyan-400/50
    ">
      {/* Card Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {TitleIcon && <span className="text-cyan-400 text-2xl">{TitleIcon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-center 
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg 
              bg-gray-800/50 border border-gray-700
              hover:border-cyan-400 hover:bg-gray-800 
              transition-all duration-300 group/skill
              animate-fadeIn"
            // style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-2 transform group-hover/skill:scale-110 group-hover/skill:rotate-6 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white text-center animate-pulse">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black text-white p-6 md:p-10">
      
      {/* Header Section */}
      <div className="flex items-center justify-center mb-12">
        <div className="group relative flex items-center justify-center gap-3 
          border-2 border-cyan-400/30 rounded-full px-8 py-3 
          hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-500
          bg-gray-900/50 backdrop-blur-sm">
          <FaCode size={30} className="text-cyan-400 animate-pulse group-hover:animate-bounce" />
          <h1 className="text-2xl md:text-4xl font-bold 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent
            group-hover:scale-105 transition-transform duration-300">
            My Skills
          </h1>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Skills Grid - Fixed hover opacity effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 hover:[&>*:not(:hover)]:opacity-40">
        <SkillCard 
          title="Front End" 
          skills={frontEnd}
          icon={<FaCode />}
        />
        
        <SkillCard 
          title="Back End" 
          skills={backEnd}
          icon={<FaServer />}
        />
        
        <SkillCard 
          title="Languages" 
          skills={languages}
          icon={<FaCode />}
        />
        
        <SkillCard 
          title="Specialized Skills" 
          skills={specializedSkills}
          icon={<FaBrain />}
        />
        
        <SkillCard 
          title="Tools" 
          skills={tools}
          icon={<FaToolbox />}
        />
        
        <SkillCard 
          title="Problem Solving" 
          skills={problemSolving}
          icon={<FaCode />}
        />
      </div>

      {/* Marquee Section */}
      <div className="mt-16 relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        
        <div className="overflow-hidden bg-gray-800/30 backdrop-blur-sm py-6 rounded-2xl border border-gray-700">
          <marquee
            className="text-white"
            behavior="scroll"
            direction="left"
            scrollamount="8"
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
          >
            <div className="flex items-center gap-12 px-4">
              {marqueeSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </marquee>
        </div>
      </div>

      {/* Add these styles to your global CSS or create a style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Skills;