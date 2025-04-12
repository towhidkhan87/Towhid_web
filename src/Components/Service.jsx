import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { name } = useParams(null);
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch('/src/assets/services.json')
            .then(res => res.json())
            .then(data => {
                const filterdata = data.find(service => service.name === name);
                setservices(filterdata);
            });
    }, [name]);

    return (
        <div className="w-11/12 mx-auto py-10 lg:w-9/12">
            {/* Service Details Section */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-4">{services?.name}</h1>
                <p className="text-lg text-gray-600">{services?.description}</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
                {/* Service Image */}
                <img className="lg:w-6/12 rounded-lg shadow-lg" src={services?.image} alt={services?.name} />

                {/* Booking Form */}
                <div className="card bg-white w-full max-w-sm shadow-2xl p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Book This Service</h2>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input mb-4" placeholder="Type Your Email Address" />
                        <label className="fieldset-label">First Name</label>
                        <input type="text" className="input mb-4" placeholder="Type Your First Name" />
                        <label className="fieldset-label">Last Name</label>
                        <input type="text" className="input mb-4" placeholder="Type Your Last Name" />
                        <button className="btn rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-600 font-semibold">
                            Confirm Now
                        </button>
                    </fieldset>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-10">
                <h2 className="text-3xl font-semibold text-center mb-4">Pricing</h2>
                <p className="text-center text-gray-600 mb-4">
                    Get this service starting at <span className="text-blue-600 font-bold">$99</span>.
                </p>
                <div className="text-center">
                    <button className="btn bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-semibold text-center mb-6">What Our Clients Say</h2>
                <div className="flex flex-col lg:flex-row justify-center gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"This service exceeded my expectations! Highly recommend."</p>
                        <p className="text-right text-gray-500 mt-3">- Client A</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">"Amazing experience! Will definitely use this service again."</p>
                        <p className="text-right text-gray-500 mt-3">- Client B</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;