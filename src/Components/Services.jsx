import React, { useEffect, useState } from 'react';
import Singleservice from './Singleservice';

const Services = () => {
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch('/src/assets/services.json')
            .then(res => res.json())
            .then(data => setservices(data));
    }, []);

    return (
        <div className="w-11/12 mx-auto py-10">
            {/* Heading Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Skilled Services</h1>
                <p className="text-lg text-gray-600">
                    Explore a wide range of professional services designed to meet your needs.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center mx-auto w-10/12 gap-6">
                {services.map(service => (
                    <Singleservice key={service.id} service={service}></Singleservice>
                ))}
            </div>
        </div>
    );
};

export default Services;