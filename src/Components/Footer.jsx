import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex justify-center items-center flex-col gap-5 border-t-2 border-gray-300 py-5">
                <img src="/public/Towhid_favicon.png" className="w-20 h-20 rounded-full" alt="Towhid's Profile" />
                <p className="font-semibold text-lg">Mohammad Towhidur Rahman Khan</p>
                <p className="text-gray-600">Product Manager | Web Developer</p>
                <div className="flex gap-5 py-5 text-2xl text-gray-700">
                    <a href="https://www.linkedin.com/in/towhid-khan-555b2719a" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-600 transition" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className="hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare className="hover:text-red-400 transition" />
                    </a>
                </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-gray-200 py-5">
                <div className="flex justify-center gap-10 text-gray-700">
                    <a href="/about" className="hover:text-red-600 transition">About Me</a>
                    <a href="/services" className="hover:text-red-600 transition">Services</a>
                    <a href="/projects" className="hover:text-red-600 transition">Projects</a>
                    <a href="/contact" className="hover:text-red-600 transition">Contact</a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center py-3 bg-gray-300">
                <p className="text-gray-700">Copyright © 2025 - ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
};

export default Footer;