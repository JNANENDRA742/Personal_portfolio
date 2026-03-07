import React, { useState } from 'react'
import { FaProjectDiagram, FaPython, FaReact } from 'react-icons/fa';
import { SiOpencv, SiStreamlit, SiTailwindcss } from 'react-icons/si';
import { AiOutlineApi } from "react-icons/ai";
import { GiBrain } from "react-icons/gi"
import { MdAnalytics } from "react-icons/md"
import { FiExternalLink, FiGithub, FiHeart } from 'react-icons/fi';
const Project = () => {

    const [filter, setFilter] = useState("All");
    const [likedProjects, setLikedProjects] = useState([]);


    const categories = [
        { id: "All", name: "All Projects", color: "from-green-500 to-green-800" },
        { id: "Machine Learning", name: "Machine Learning", color: "from-green-600 to-green-800" },
        { id: "Web", name: "Web", color: "from-green-500 to-green-800" },
        { id: "Api", name: "API", color: "from-green-500 to-green-800" },
        { id: "Open Cv", name: "Open CV", color: "from-green-500 to-green-800" },
    ];
    const projects = [
        {
            id: "1",
            title: "Weather Prediction",
            description: "A real-time weather application built using Streamlit and OpenWeatherMap API. Includes user login, weather history, and forecast visualization.",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/JNANENDRA742/DS-ML-mini-projects-/tree/main/ML_MINI_PROJECTS/Real_time_weather_prediction_api",
            live: "https://e6zmeaa7vfbq6sqvtbmgp2.streamlit.app/",
            category: "Api",
            technologies: [
                { name: "Python", icon: <FaPython className="text-blue-400" /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
                { name: "Weather Api", icon: <AiOutlineApi className="text-yellow-400" /> },
                // {name : "React" , icon : <FaReact className="text-cyan-400" />},
                // {name : "TensorFlow" , icon : <SiTensorflow className="text-orange-400" />},
                // {name : "Python" , icon : <FaPython className="text-yellow-400" />},
                // {name : "MongoDB" , icon : <SiMongodb className="text-green-400" />},
            ],
            stats: { views: "15k", likes: "9k", date: "2025" },
        },
        {
            id: "2",
            title: "Face Attendence System",
            description: "Face detection and recognition system built using OpenCV.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/JNANENDRA742/DS-ML-mini-projects-/tree/main/ML_MINI_PROJECTS/open_cv",
            live: null,
            category: "Open Cv",
            technologies: [
                { name: "Python", icon: <FaPython className="text-blue-400" /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
                { name: "Open Cv", icon: <SiOpencv className="text-green-400" /> },
            ],
            stats: { views: "10k", likes: "8k", date: "2025" },
        },
        {
            id: "3",
            title: "Sentiment Analysis",
            description: "Sentiment analysis using natural language processing.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/JNANENDRA742/DS-ML-mini-projects-/tree/main/ML_MINI_PROJECTS/Sentiment_Analysis",
            live: "https://94rzhvj2q6nkvbnkzvf2rv.streamlit.app/",
            category: "Machine Learning",
            technologies: [
                { name: "Python", icon: <FaPython className="text-blue-400" /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
                { name: "Data Science", icon: <MdAnalytics className="text-purple-400" /> }
            ],
            stats: { views: "13k", likes: "7k", date: "2025" }
        },
        {
            id: "4",
            title: "House Price prediction",
            description: "Machine learning model that predicts house prices using real-world Kaggle data.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/JNANENDRA742/DS-ML-mini-projects-/blob/main/ML_MINI_PROJECTS/HOUSE_PRICE_PREDICTION.py",
            live: "https://vi3zktjywbiszkjc98g8tg.streamlit.app/",
            category: "Machine Learning",
            technologies: [
                { name: "Python", icon: <FaPython className="text-blue-400" /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
                // { name: "Data Science", icon: <MdAnalytics className="text-purple-400" /> },
                { name: "Machine Learning", icon: <GiBrain className="text-cyan-400" /> }
            ],
            stats: { views: "9k", likes: "6k", date: "2025" }
        },
        {
            id: "5",
            title: "Chat Bot",
            description: "Chat bot built using OpenAI's Gemini API for natural language processing.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/JNANENDRA742/DS-ML-mini-projects-/tree/main/ML_MINI_PROJECTS/api",
            live: null,
            category: "Api",
            technologies: [
                { name: "Python", icon: <FaPython className="text-blue-400" /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
                { name: "Api", icon: <AiOutlineApi className="text-yellow-400" /> },
            ],
            stats: { views: "14k", likes: "9k", date: "2025" }
        },
        {
            id: "6",
            title: "Personal Portfolio",
            description: "desc 6",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com",
            live: "/",
            category: "Web",
            technologies: [
                { name: "React", icon: <FaReact className="text-blue-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
            ],
            stats: { views: "20k", likes: "20k", date: "2026" }
        }
    ]
    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter(project => project.category === filter);

    const toggleLike = (id) => {
        setLikedProjects((prev) =>
            prev.includes(id)
                ? prev.filter((projectId) => projectId !== id)
                : [...prev, id]
        );
    };
    return (
        <div className='min-h-screen w-full text-white p-6 md:pd-10 '>

            <div className='relative max-w-7xl mx-auto'>
                <div className='flex  flex-wrap justify-center items-center mb-10'>
                    <div className='relative group gap-4 flex justify-center items-center border border-cyan-400 text-center rounded-full px-4 py-2 hover:shadow-md hover:shadow-cyan-400 transition-all duration-500'>
                        <FaProjectDiagram size={30} className='text-gray-400 animate-pulse group-hover:animate-bounce' />
                        <h1 className='text-3xl sm:font-semibold md:font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-600 bg-clip-text text-transparent animate-gradient group-hover:animate-pulse'>
                            My Projects
                        </h1>
                    </div>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
                    Crafting digital experiences that blend innovation with functionality.
                    Each project tells a unique story of problem-solving and creativity.
                </p>
            </div>



            <div className="flex flex-wrap justify-center gap-4 m-20">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`relative inline-block px-6 py-3 sm:w-25 md:w-50 
                                rounded-full font-semibold text-lg 
                                transition-all duration-300 
                                hover:scale-105 active:scale-95 
                                overflow-hidden group
                                ${filter === cat.id
                                ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }
                 `}
                    >
                        {/* Animated Border (Only when active) */}
                        {filter === cat.id && (
                            <>
                                {/* Spinning Border Layer */}
                                <span className="absolute inset-0 rounded-full 
                                    bg-gradient-to-r from-cyan-500 
                                    via-blue-500 to-purple-600
                                    animate-[spin_4s_linear_infinite]">
                                </span>

                                {/* Inner Surface Layer */}
                                <span className="absolute inset-[2px] rounded-full 
                                bg-gray-950">
                                </span>
                            </>
                        )}

                        {/* Normal State Background */}
                        {filter !== cat.id && (
                            <span className="absolute inset-0 rounded-full 
                         bg-gray-800 
                         group-hover:bg-gray-700 
                         transition-all duration-300">
                            </span>
                        )}

                        {/* Text */}
                        <span className="relative z-10 text-white">
                            {cat.id}
                        </span>
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project) => (
                    <div key={project.title} className='group relative rounded-2xl overflow-hidden  hover:border-transparent transition-all duration-500 hover:scale-103 hover:shadow-2xl hover:shadow-purple-500/50 '> {/* border border-purple-500 */}
                        <div className='relative h-56 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Category Name */}
                            <div className='right-4 top-4 absolute px-4 py-3 rounded-full bg-gray-900/80 backdrop-blur-sm text-sm font-semibold text-white border border-gray-600'>
                                {categories.find(c => c.id === project.category)?.name}
                            </div>

                        </div>

                        <div className="p-6">
                            <h3 className='text-2xl sm:text-xl sm:font-semibold md:font-bold text-white mb-3  bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent'>
                                {project.title}
                            </h3>
                            <p className='text-xl text-gray-500 line-clamp-2 mb-4'>{project.description}</p>

                            {/* technologies */}
                            <div className='flex flex-wrap gap-2 text-white'>
                                {project.technologies.map((tech) => (
                                    <div key={tech.name} className='flex items-center gap-1 px-3 py-2 bg-gray-700/70 text-white rounded-lg text-sm'>
                                        {tech.icon}
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* stats */}
                            <div className='flex flex-wrap flex-row text-white gap-2 justify-between items-center'>
                                <div className='flex gap-4 text-gray-300 items-center text-sm mt-6'>
                                    <span className='flex items-center gap-1'>
                                        <FiHeart className={`cursor-pointer transition-colors duration-300 ${likedProjects.includes(project.id) ? "text-pink-500 fill-pink-500" : "hover:text-pink-500"
                                            }`}
                                            onClick={() => toggleLike(project.id)}
                                        />
                                        {project.stats.likes}
                                    </span>
                                    <span>👀 {project.stats.views}</span>
                                    <span>📅 {project.stats.date}</span>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className='flex gap-4 m-4'>
                                <a href={project.github}
                                target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group overflow-hidden flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                                >
                                    <FiGithub /> Code
                                    <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>

                                </a>

                                {project.live ? (
                                    <a href={project.live}
                                    target="_blank"
                                        rel="noopener norefferrer"
                                        className='flex-1 flex items-center justify-center gap-2 px-4 py-2
                                    rounded-lg transition-all duration-300 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:scale-105 text-white'
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>

                                ) : (
                                    <button
                                        disabled
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                                            rounded-lg bg-gray-800 text-gray-500 
                                            cursor-not-allowed opacity-70"
                                    >
                                        <FiExternalLink size={30}/> 
                                        <span className='text-sm'>Deployment in Progress</span>
                                    </button>
                                )}

                                
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-6'>
                {[
                    { label: "Total Projects", value: "25+", icon: "🚀" },
                    { label: "Happy Clients", value: "15+", icon: "😊" },
                    { label: "Lines of Code", value: "100K+", icon: "💻" },
                    { label: "Coffees", value: "500+", icon: "☕" },
                ].map((stat, index) => (
                    <div key={index} className='relative group overflow-hidden p-6 bg-gray-700/30 backdrop-blur-xl rounded-xl border border-gray-700 text-center group hover:border-purple-500 transition-all duration-300'>
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {stat.value}
                        </div>
                        <div className="text-gray-400">{stat.label}</div>
                        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>

                    </div>
                ))

                }
            </div>

        </div>
    )
}

export default Project



