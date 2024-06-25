import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-row justify-between items-center mt-6">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className="text-blue-900 font-bold text-2xl cursor-pointer">Anup</p>
                    </div>
                    <p className="text-blue-900 font-bold text-2xl cursor-pointer">Kumar</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <div className="flex mt-3.5 space-x-10 mr-10">
                            <li>
                                <RouterLink className="text-blue-900 hover:text-gray-500 font-medium" to="/">Home</RouterLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="description"
                                    smooth={true}
                                    duration={500}
                                    className="text-blue-900 hover:text-gray-500 font-medium cursor-pointer"
                                >
                                    Overview
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    className="text-blue-900 hover:text-gray-500 font-medium transition-all duration-300 cursor-pointer"
                                >
                                    Projects
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="text-blue-900 hover:text-gray-500 font-medium cursor-pointer"
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </div>
                        <li>
                            <a href="https://drive.google.com/file/d/1qW_sWKyH3pIr5nPRE1JPnlRAMJsds8RR/view?usp=sharing"
                               target="_blank" rel="noopener noreferrer">
                                <button
                                    className="relative inline-block px-8 py-3 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition transform hover:scale-105"
                                >
                                    Resume
                                    <span
                                        className="absolute inset-0 border-2 border-blue-900 rounded transform translate-x-1 translate-y-1"></span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
