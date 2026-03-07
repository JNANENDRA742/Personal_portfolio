import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJava, FaUser, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiMysql, SiNodedotjs, SiC, SiCplusplus, SiPython, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const Skill = () => {
  const frontEnd = [
    { name: "HTML", score: 90 },
    { name: "CSS", score: 85 },
    { name: "Tailwind CSS", score: 85 },
    { name: "JavaScript", score: 80 },
    { name: "React", score: 70 },
    // { name: "Bootstrap", score: 90 },
    // { name: "TypeScript", score: 50 },
    // { name: "Next.js", score: 30 },
  ];
  const backEnd = [
    { name: "My SQL", score: "80" },
    { name: "PHP", score: "70" },
    { name: "Node.js", score: "60" },
    { name: "MongoDB", score: "70" }
  ];
  const languages = [
    { name: "C", score: "90" },
    { name: "Java", score: "70" },
    { name: "Python", score: "70" },
    { name: "C++", score: "70" }
  ];
  const skills = [
    { name: "Data Science", score: "70" },
    { name: "Machine Learning", score: "30" }
  ]
  const problemSolving = [
    { name: "LeetCode", score: 1500 },
    { name: "GeekForGeeks", score: 1000 }
  ]
  const tools = [
    "Git", "Git Hub", "Visual Studio Code"
  ];
  const marqueeSkills = [
    // Frontend
    { name: "HTML", item: <FaHtml5 size={30} className="text-orange-600 animate-pulse" /> },
    { name: "CSS", item: <FaCss3Alt size={30} className="text-blue-600 animate-pulse" /> },
    { name: "JavaScript", item: <FaJs size={30} className="text-yellow-400 animate-pulse" /> },
    { name: "React", item: <FaReact size={30} className="text-cyan-400 animate-pulse" /> },
    { name: "Tailwind CSS", item: <SiTailwindcss size={30} className="text-sky-400 animate-pulse" /> },
    { name: "TypeScript", item: <SiTypescript size={30} className="text-blue-500 animate-pulse" /> },
    { name: "Next.js", item: <SiNextdotjs size={30} className="text-gray-600 animate-pulse" /> },

    // Backend
    { name: "PHP", item: <SiPhp size={30} className="text-indigo-500 animate-pulse" /> },
    { name: "MySQL", item: <SiMysql size={30} className="text-blue-700 animate-pulse" /> },
    { name: "Node.js", item: <SiNodedotjs size={30} className="text-green-500 animate-pulse" /> },
    { name: "MongoDB", item: <SiMongodb size={30} className="text-green-600 animate-pulse" /> },

    // Languages
    { name: "C", item: <SiC size={30} className="text-blue-500 animate-pulse" /> },
    { name: "C++", item: <SiCplusplus size={30} className="text-blue-600 animate-pulse" /> },
    { name: "Java", item: <FaJava size={30} className="text-red-500 animate-pulse" /> },
    { name: "Python", item: <SiPython size={30} className="text-yellow-500 animate-pulse" /> },

    // Tools
    { name: "Git", item: <FaGitAlt size={30} className="text-orange-500 animate-pulse" /> },
    { name: "VS Code", item: <VscVscode size={30} className="text-blue-400 animate-pulse" /> },
  ];

  return (
    <div className="min-h-screen w-full text-white p-10 ">
      <div className="flex items-center justify-center ">
        <div className="group relative flex items-center justify-center gap-2 border border-cyan-400 rounded-full mb-10 w-50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-500">
          <FaCode size={30} className="text-gray-400 animate-pulse group-hover:animate-bounce" />
          <h1 className=" group-hover:animate-pulse sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h1>
        </div>
      </div>
      <div className="group grid sm:grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="box relative p-6 rounded-xl border border-gray-700 
                transition-all duration-300
                group-hover:opacity-40 hover:!opacity-100  // ! antey Force ga 100% pettu, vere rules ignore cheyyi
                 hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
                ">

          <h1 className="text-white text-center mb-6 py-2  rounded-full shadow-lg shadow-white sm:text-xl text-3xl font-bold sm:font-semibold mb-8 text-center italic">
            {/* <h1 className="sm:text-xl text-3xl font-bold sm:font-semibold mb-8 text-center italic"> */}
            Front End Skills
          </h1>

          {frontEnd.map((skill, index) => (
            <div key={index} className="mb-6">

              {/* Skill name + percentage */}
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-cyan-400">{skill.score}%</span>
              </div>

              {/* Background bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">

                {/* Filled bar */}
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 transition-all duration-700 shadow-lg hover:shadow-blue"
                  style={{ width: `${skill.score}%` }}
                ></div>

              </div>
            </div>
          ))}
        </div>

        {/* BackEnd */}
        <div className="box relative p-6 rounded-xl border border-gray-700 
        transition-all duration-300
        group-hover:opacity-40 hover:!opacity-100
         hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
        ">
          <h1 className="text-white text-center mb-6 py-2  rounded-full shadow-lg shadow-white sm:text-xl italic text-3xl font-bold sm:font-semibold">BackEnd Skills</h1>
          {backEnd.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-cyan-400">{skill.score}%</span>
              </div>
              <div className="w-full h-3 rounded-full overflow-hidden bg-gray-700">
                <div className="h-3 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 transition-all duration-700 shadow-lg hover:shadow-blue" style={{ width: `${skill.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}

        <div className="box relative p-6 rounded-xl border border-gray-700 
        transition-all duration-300
        group-hover:opacity-40 hover:!opacity-100
         hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
        ">
          <h1 className="text-3xl text-center mb-6 py-2  rounded-full shadow-lg shadow-white sm:text-xl sm:font-semibold font-bold italic white">Languages</h1>
          {languages.map((language, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{language.name}</span>
                <span className="text-cyan-400">{language.score}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">
                <div className="h-3 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" style={{ width: `${language.score}%` }}></div>
              </div>
            </div>


          ))}
        </div>

        {/* skills */}
        <div className="box relative p-6 rounded-xl border border-gray-700 
        transition-all duration-300
        group-hover:opacity-40 hover:!opacity-100
         hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
        ">
          <h1 className="text-3xl text-center mb-6 py-2  rounded-full shadow-lg shadow-white sm:text-xl sm:font-semibold font-bold italic white">Skills</h1>
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-cyan-400">{skill.score}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">
                <div className="h-3 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" style={{ width: `${skill.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="box relative p-6 rounded-xl border border-gray-700 
        transition-all duration-300
        group-hover:opacity-40 hover:!opacity-100
         hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
        ">
          <h1 className="text-3xl text-center mb-6 py-2  rounded-full shadow-lg shadow-white sm:text-xl sm:font-semibold font-bold italic white">Tools</h1>
          {tools.map((tool, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span>{tool}</span>
                <span className="text-cyan-400">100%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">
                <div className="h-3 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" style={{ width: `100%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* problem solving */}
        <div className="box relative p-6 rounded-xl border border-gray-700 
        transition-all duration-300
        group-hover:opacity-40 hover:!opacity-100
         hover:shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.5),0_0_60px_rgba(168,85,247,0.4)]
        ">
          <h1 className="text-3xl text-center mb-6 py-2  rounded-full shadow-lg shadow-white sm:text-xl sm:font-semibold font-bold italic text-white">Problem Solving</h1>
          {problemSolving.map((problem, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between">
                <span>{problem.name}</span>
                <span className="text-cyan-400">{problem.score} problems</span>
              </div>
              <div className="w-full h-3 overflow-hidden rounded-full bg-gray-700">
                <div className="h-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" style={{ width: `100%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Tag */}
      <marquee
        className="mt-10  text-xl sm:font-semibold font-bold "
        behavior="scroll"
        direction="left"
        scrollamount="10"
        onMouseOver={(e) => e.target.stop()}
        onMouseOut={(e) => e.target.start()}
      >
        <div className="flex items-center gap-12">
          {marqueeSkills.map((skill, index) => (
            <div key={index} className="flex items-center flex-wrap flex-col gap-2 ">
              <span>{skill.item}</span>
              <span className="text-white hover:text-cyan-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Skill;