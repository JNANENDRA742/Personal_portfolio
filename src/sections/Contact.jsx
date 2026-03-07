import React, { useState } from 'react'
import { BsChatDotsFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { GiRingingBell } from 'react-icons/gi'
import { MdOutlineEmail } from 'react-icons/md';
import { FaCheckCircle, FaRegSmile } from 'react-icons/fa';

// importing for Email API
import emailjs from '@emailjs/browser';
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_ID;
// console.log("SERVICE:", SERVICE_ID);
// console.log("TEMPLATE:", TEMPLATE_ID);
// console.log("KEY:", PUBLIC_KEY);
const Contacts = () => {

    const [activeField, setActiveField] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        error: null
    })
    const socialLinks = [
        {
            name: "GitHub",
            link: "https://github.com/JNANENDRA742",
            icon: <FaGithub />,
            color: "hover:bg-gray-900",
            bgColor: "bg-gray-800/50",
            textColor: "text-gray-300",
        },
        {
            name: "Linkedin",
            link: "https://linkedin.com",
            icon: <FaLinkedin />,
            color: "hover:bg-blue-600",
            bgColor: "bg-blue-500/50",
            textColor: "text-blue-500"
        }
    ]

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (formStatus.submitting) return;

        setFormStatus(prev => ({ ...prev, submitting: true }));

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    time: new Date().toLocaleString()
                },
                PUBLIC_KEY
            );

            //  Show success
            setFormStatus({
                submitted: true,
                submitting: false,
                error: null
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

            // Auto hide after 5 seconds
            setTimeout(() => {
                setFormStatus(prev => ({
                    ...prev,
                    submitted: false
                }));
            }, 5000);

        } catch (error) {
            setFormStatus({
                submitted: false,
                submitting: false,
                error: "Something went wrong. Please try again."
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    // console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    return (

        <div className='min-h-screen w-full text-white bg-black'>
            <div className='flex flex-wrap flex-col items-center'>

                <div className='flex flex-wrap flex-col justify-center items-center  mt-20 mb-10'>
                    {/* Connect Button */}
                    <div className='group  mb-4 flex flex-row gap-2 items-center bg-gray-800 text-white px-4 py-2 rounded-full cursor-pointer'>
                        <GiRingingBell className='text-yellow-600 animate-slow-spin group-hover:scale-120 ' />
                        <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Let's Connect</span>
                    </div>
                    {/* Header */}
                    <div className='flex flex-wrap flex-col text-center m-3'>
                        <h1 className="sm:font-semibold md:font-bold text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className='mt-2 max-w-2xl word-break  text-gray-400/100'>Have a question or want to work together? I'd love to hear from you!</p>
                    </div>
                </div>

                {/* body */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 w-full p-10'>
                    {/* form */}
                    <div className='relative bg-gray-900 w-full rounded-2xl p-10'>
                        {/* message box */}
                        <div className='group p-4 flex flex-row flex-wrap items-center gap-5'>
                            <div className='w-10 h-10 flex justify-center backdrop-blur-2xl rounded-lg items-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse'>
                                <BsChatDotsFill className='text-2xl group-hover:scale-120 duration-500' />
                            </div>
                            <span>
                                <h1 className='sm:font-semibold md:font-bold text-2xl'>Send me a Message</h1>
                                <p>I'll get back to you within 24 hours</p>
                            </span>
                        </div>


                        {/* form success interface */}
                        {formStatus.submitted && (
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10 animate-fade-in">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
                                        <FaCheckCircle className="text-6xl text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-white/80">Thanks for reaching out. I'll respond soon!</p>
                                    <FaRegSmile className="text-4xl mx-auto mt-4 animate-spin-slow" />
                                </div>
                            </div>
                        )}


                        {/* form */}
                        <form onSubmit={handlesubmit} className='space-y-6 '>
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='relative group'>
                                    <label className={`text-xl sm:font-semibold md:font-bold ${activeField === 'name' ? 'text-cyan-400' : 'text-gray-400'}`}>
                                        Name :
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            value={formData.name}
                                            onFocus={() => setActiveField('name')}
                                            onBlur={() => setActiveField(null)}
                                            required
                                            className="w-full px-4 py-4 bg-gray-950 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-cyan-300 transition-all duration-300 peer"
                                            placeholder="Enter your Name : "
                                        />
                                    </div>
                                </div>

                                {/* email */}
                                <div className='relative group'>
                                    <label className={`text-xl sm:font-semibold md:font-bold ${activeField === 'email' ? 'text-blue-400' : 'text-gray-400'}`}>
                                        Email :
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            onFocus={() => setActiveField('email')}
                                            onBlur={() => setActiveField(null)}
                                            required
                                            className="w-full px-4 py-4 bg-gray-950 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-blue-300 transition-all duration-300 peer"
                                            placeholder="ex: abcd@gmail.com "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* subject */}
                            <div className='relative group'>
                                <label className={`text-xl sm:font-semibold md:font-bold ${activeField === 'subject' ? 'text-pink-500/70' : 'text-gray-400'}`}>
                                    Subject :
                                </label>
                                <div className='relative'>
                                    <input
                                        type="text"
                                        name="subject"
                                        onChange={handleChange}
                                        value={formData.subject}
                                        onFocus={() => setActiveField('subject')}
                                        onBlur={() => setActiveField(null)}
                                        placeholder="what's this email about : "
                                        required
                                        className='w-full px-4 py-4 bg-gray-950 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/90 focus:ring-2 focus:ring-pink-600/40 hover:border-pink-300 transition-all duration-300 peer'
                                    />
                                </div>
                            </div>
                            {/* message field */}
                            <div className="relative group">
                                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${activeField === 'message' ? 'text-purple-600' : 'text-gray-400'}`}>
                                    Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        onChange={handleChange}
                                        value={formData.message}
                                        onFocus={() => setActiveField('message')}
                                        onBlur={() => setActiveField(null)}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-4 bg-gray-950 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all hover:border-purple-300 duration-300 resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                            </div>
                            <button type='submit'
                                disabled={formStatus.submitting}
                                className='text-center group w-full overflow-hidden rounded-lg p-4  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 hover:opacity-100 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                <div className='flex flex-wrap gap-2 items-center justify-center'>
                                    {formStatus.submitting ?
                                        (

                                            <>
                                                <div className='w-6 h-6 border-2 border-white border-t-transparent animate-spin rounded-full'></div>
                                                <span className='sm:font-semibold md:font-bold'>Sending ...</span>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <span className='sm:font-semibold md:font-bold'>Send Message</span>
                                                <FaPaperPlane className='text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
                                            </>
                                        )
                                    }

                                </div>

                            </button>
                            {formStatus.error && (
                                <p className="text-red-500 text-center mt-2">
                                    {formStatus.error}
                                </p>
                            )}
                        </form>

                    </div>

                    {/* contact details in side menu */}
                    <div className='grid grid-cols-1 gap-6 pl-10 pr-10'>
                        {/* 1st side menu */}
                        <div className='w-full text-white bg-gray-900 rounded-2xl p-10 flex flex-wrap flex-col gap-10'>
                            <h3 className="text-2xl sm:font-semibold md:font-bold text-white-400 [text-shadow:0_0_10px_cyan]">
                                Quick Connect
                            </h3>
                            <div className='relative group overflow-hidden px-6 flex flex-wrap gap-4 flex-row items-center bg-green-500/10 rounded-xl border border-green-500/20 p-4 mt-4'>

                                <div className='relative z-10'>
                                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                                    <div className='absolute -inset-1 bg-green-500 rounded-full opacity-75 animate-ping'></div>
                                </div>

                                <div className='z-10'>
                                    <h3 className='text-xl sm:font-semibold md:font-bold'>Available for Work</h3>
                                    <span className='text-gray-400'>Reply within 24 hours</span>
                                </div>

                                <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-green-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-900'></div>

                            </div>
                            <div className='relative overflow-hidden group w-full flex flex-wrap flex-row gap-4 items-center bg-cyan-400/10 rounded-xl border-cyan-400/20 p-4 mt-4'>
                                <div className='w-10 h-10 flex justify-center items-center flex-wrap rounded-lg bg-purple-500/80 animate-pulse'>
                                    <MdOutlineEmail className='text-3xl text-purple-400' />
                                </div>
                                <div>
                                    <p className='text-gray-400'>Response Time</p>
                                    <h3 className="text-xl font-semibold ">&lt; 24 hours</h3>
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-900'></div>
                            </div>

                        </div>

                        {/* 2nd side menu */}
                        <div className='w-full bg-gray-900 rounded-2xl flex flex-wrap  justify-center items-center'>

                            <div className='grid grid-cols-2 gap-5'>
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        target="_blank"
                                        className="group relative overflow-hidden flex flex-wrap flex-col rounded-2xl bg-white/5 border border-white/10 p-2 m-2 transition-all duration-300 hover:scale-105"
                                        rel="noopener noreferrer"
                                        href={social.link}
                                    >
                                        <div className='w-10 h-10 flex justify-center items-center flex-wrap rounded-lg text-3xl animate-pulse group-hover:rotate-15 duration-500'>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <h3 className="sm:text-xl md:text-2xl font-semibold ">{social.name}</h3>
                                        </div>
                                        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <style jsx>{
                `
                .animate-slow-spin {
                    animation: spin 3s linear infinite;
                }
                
                .animate-spin-slow {
                    animation: spin 4s linear infinite;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                    
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-in-out;
                }
                `}</style>
        </div>
    )
}

export default Contacts
