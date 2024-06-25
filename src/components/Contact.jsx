import myImage from "../assets/anup.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side - Contact Details */}
                <div className="flex flex-col">
                    <div className="flex flex-col mt-16 ml-52">
                        <section id="contact">
                        <div className="relative">
                            <p className="text-[6rem] font-bold text-gray-300 opacity-75 transform translate-x-1 translate-y-1">
                                Contact
                            </p>
                            <p className="text-[6rem] font-bold text-outline-black absolute top-2 left-2">
                                Contact
                            </p>
                        </div>
                        </section>
                    </div>
                    <div className="space-y-8 ml-52 mt-10">
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-blue-900 transition transform hover:scale-105"/>
                            <p>Email:
                                <a href="mailto:anupg2551@gmail.com" target="_blank" rel="noopener noreferrer"><span className="text-blue-900"> anupg2551@gmail.com</span></a>
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-pink-600 transition transform hover:scale-105"/>
                            <p>Instagram:
                                <a href="https://www.instagram.com/anup_2247" target="_blank" rel="noopener noreferrer">
                                    <span className="text-blue-900"> @anup_2247</span>
                                </a>
                            </p>

                        </div>
                        <div className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-blue-700 transition transform hover:scale-105"/>
                            <p>Twitter:
                                <a href="https://x.com/anup2247" target="_blank" rel="noopener noreferrer">
                                    <span className="text-blue-900"> @anup2247</span>
                                </a>
                            </p>

                        </div>
                        <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-red-600 transition transform hover:scale-105"/>
                            <p>Address:
                                <span> Tatisilwai, Ranchi, PinCode-835103, Jharkhand, India </span></p>
                        </div>
                    </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="flex justify-center items-center mt-60 mr-36">
                    <form className="w-96 max-w-lg bg-white p-8 rounded shadow-md"
                          action="https://formspree.io/f/xwpeenzo"
                          method="POST"
                    >
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name<FontAwesomeIcon icon={faAsterisk} className="w-2 h-2 text-red-700 mb-0.5" />
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="Name"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                required="true"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email<FontAwesomeIcon icon={faAsterisk} className="w-2 h-2 text-red-700 mb-0.5" />
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="Email"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                required="true"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message<FontAwesomeIcon icon={faAsterisk} className="w-2 h-2 text-red-700 mb-0.5" />
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="Message"
                                id="message"
                                rows="5"
                                placeholder="Your Message"
                                required="true"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="relative inline-block px-6 py-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition transform hover:scale-105"
                                type="submit"
                            >
                                Send
                                <span
                                    className="absolute inset-0 border-2 border-blue-900 rounded transform translate-x-1 translate-y-1"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
