import React from 'react';
import { Link } from 'react-router-dom';

const Singleservice = ({ service }) => {
    return (
        <div className="w-full lg:w-96 mx-auto py-5">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                {/* Service Image */}
                <figure className="relative">
                    <img 
                        className="h-72 w-full object-cover" 
                        alt={service.name} 
                        src={service.image} 
                    />
                    <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm px-3 py-1 rounded-full shadow-md">
                        Top Rated
                    </div>
                </figure>

                {/* Service Details */}
                <div className="card-body p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        {service.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {service.description}
                    </p>

                    {/* Pricing and Delivery Info */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-blue-600 font-semibold">
                            {service.price_range}
                        </span>
                        <span className="text-green-600 font-semibold">
                            {service.delivery_time}
                        </span>
                    </div>

                    {/* Call-to-Action */}
                    <div className="text-center">
                        <Link 
                            to={`/services/${service.name}`} 
                            className="rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-600 font-semibold">
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singleservice;