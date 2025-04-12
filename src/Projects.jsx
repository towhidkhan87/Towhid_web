import React from 'react';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "A fully responsive e-commerce platform with payment integration.",
            image: "/public/towhidkhan87.github.io_Cheffest_practice_.png",
            link: "/projects/ecommerce"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A modern portfolio showcasing creative work and skills.",
            image: "/public/Home Screen.jpg",
            link: "/projects/portfolio"
        },
        {
            id: 3,
            title: "Blog Platform",
            description: "A dynamic blog platform with user authentication and CMS features.",
            image: "/public/Index-Landing Page.jpg",
            link: "/projects/blog"
        }
    ];

    return (
        <div className="w-11/12 mx-auto py-10 lg:w-9/12">
            {/* Heading Section */}
            <h1 className="text-5xl font-bold text-center mb-10">My Projects</h1>
            <p className="text-lg text-gray-600 text-center mb-10">
                Explore some of the projects I've worked on, showcasing my skills and expertise.
            </p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map(project => (
                    <div 
                        key={project.id} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a 
                                href={project.link} 
                                className="rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-600 font-semibold">
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;