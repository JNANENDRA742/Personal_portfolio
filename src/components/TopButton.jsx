import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const TopButton = () => {
    const [visible, setVisiible] = useState(false);


    // visibility of button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300)
                setVisiible(true);
            else
                setVisiible(false);
        };
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.addEventListener("scroll", toggleVisibility);
        }
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        visible && (

            <button
                onClick={scrollToTop}
                className="fixed bottom-6 left-6 z-50 p-[3px] rounded-full absolute overflow-hidden hover:scale-110 active:scale-70 transition-all duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 animate-spin"></div>
                <div className="relative bg-black p-3 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                    <FaArrowUp size={30} />
                </div>
            </button>

        )
    )
}

export default TopButton
