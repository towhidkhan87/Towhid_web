import React from 'react';

const About = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto py-5 lg:w-9/12">
                <h1 className="text-5xl font-bold text-center mb-10">About Me</h1>
                
                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10">
                    <img 
                        src="/public/Towhid.png" 
                        alt="Towhid's Profile" 
                        className="w-48 h-48 rounded-full shadow-lg mb-5 lg:mb-0 lg:mr-10"
                    />
                    <p className="text-lg text-gray-700">
                        Hi, I'm Towhid! A passionate web developer with expertise in building modern, responsive, and user-friendly web applications. I love solving problems and creating impactful digital experiences.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold mb-5">Want to Work Together?</h2>
                    <p className="text-gray-600 mb-5">
                        I'm open to freelance projects, collaborations, and full-time opportunities. Let's create something amazing together!
                    </p>
                    <a 
                        href="/contact" 
                        className="rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-600 font-semibold">
                        Contact Me
                    </a>
                </div>

                {/* Monetization Section */}
                <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3 text-center">Support My Work</h2>
                    <p className="text-gray-600 mb-5 text-center">
                        If you enjoy my work and want to support me, consider buying me a coffee or checking out my premium resources.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a 
                            href="https://www.buymeacoffee.com/towhid" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
                            Buy Me a Coffee
                        </a>
                        <a 
                            href="/premium-resources" 
                            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                            Explore Premium Resources
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;