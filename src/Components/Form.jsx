import React, { useState } from 'react';

const Form = () => {
    const [selectedService, setSelectedService] = useState('');

    const handleSelectService = (service) => {
        setSelectedService(service);
    };

    return (
        <div className="flex justify-center items-center h-fit mb-10">
            <fieldset className="fieldset w-full max-w-lg border-gray-300 p-6 rounded-lg shadow-lg">
                <legend className="fieldset-legend font-bold text-3xl text-center text-blue-600 mb-6 translate-y-10">
                    Contact Form
                </legend>

                {/* Email Input */}
                <label className="fieldset-legend text-lg font-semibold mb-2">Email</label>
                <input 
                    type="email" 
                    className="input w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter Your Email Address" 
                />

                {/* First Name Input */}
                <label className="fieldset-legend text-lg font-semibold mb-2">First Name</label>
                <input 
                    type="text" 
                    className="input w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Enter Your First Name" 
                />

                {/* Service Dropdown */}
                <div className="dropdown dropdown-start mb-4">
                    <label className="fieldset-legend text-lg font-semibold mb-2">Service Category</label>
                    <input
                        tabIndex={0}
                        type="text"
                        className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Choose Your Desired Service"
                        value={selectedService}
                        readOnly
                    />
                    <ul 
                        tabIndex={0} 
                        className="dropdown-content menu bg-white rounded-lg shadow-lg z-10 w-full mt-2 p-2 border border-gray-200">
                        <li><a onClick={() => handleSelectService('Web Development')}>Web Development</a></li>
                        <li><a onClick={() => handleSelectService('UI/UX Design')}>UI/UX Design</a></li>
                        <li><a onClick={() => handleSelectService('Data Analysis')}>Data Analysis</a></li>
                        <li><a onClick={() => handleSelectService('Email Marketing')}>Email Marketing</a></li>
                    </ul>
                </div>

                {/* Message Textarea */}
                <fieldset className="fieldset mb-4">
                    <legend className="fieldset-legend text-lg font-semibold mb-2">Message</legend>
                    <textarea 
                        className="textarea h-32 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Describe your needs and desires"
                    ></textarea>
                </fieldset>

                {/* Submit Button */}
                <button 
                    className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition w-full font-semibold">
                    Submit
                </button>
            </fieldset>
        </div>
    );
};

export default Form;