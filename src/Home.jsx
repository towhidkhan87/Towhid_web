import React from 'react';
import Hero from './Components/Hero';
import Company from './Components/Company';
import Services from './Components/Services';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Work Experience Section */}
            <div className="w-11/12 mx-auto py-10 lg:w-9/12">
                <h1 className="text-center text-4xl font-bold mb-10">Work Experience with the Company</h1>
                <Company />
            </div>

            {/* Featured Projects Section */}
            <div className="w-11/12 mx-auto py-10 lg:w-9/12">
                <h1 className="text-center text-4xl font-bold mb-10">Featured Projects</h1>
                <img src="/public/Group 1.jpg" alt="" />
                <div className="text-center mt-10">
                    <a
                        href="/projects"
                        className="rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-green-700 font-semibold">
                        View All Projects
                    </a>
                </div>
            </div>

            {/* Skilled Services Section */}
            <Services />
            <div className="text-center">
                <a
                    href="/services"
                    className="rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-green-700 font-semibold">
                    Explore All Services
                </a>
            </div>

            {/* Testimonials Section */}
            <div className="w-11/12 mx-auto my-10 py-10 lg:w-9/12 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-center text-4xl font-semibold mb-5">What Clients Say</h2>
                <p className="text-center text-gray-600 mb-5">
                    Hear from some of the amazing people I've worked with.
                </p>
                <div className="flex flex-col lg:flex-row justify-center space-y-5 lg:space-y-0 lg:space-x-5">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"Towhid is an exceptional developer! He delivered beyond expectations."</p>
                        <p className="text-right text-gray-500 mt-3">- Client A</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"Highly recommend Towhid for any web development project."</p>
                        <p className="text-right text-gray-500 mt-3">- Client B</p>
                    </div>
                </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="w-11/12 mx-auto mb-10 py-10 lg:w-9/12 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-center text-4xl font-semibold mb-5">Stay Updated</h2>
                <p className="text-center text-gray-600 mb-5">
                    Subscribe to my newsletter for updates on new projects, resources, and more.
                </p>
                <form className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-10 py-3 w-full lg:w-auto rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-600 font-semibold">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;