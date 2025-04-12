import React from 'react';
import {Link} from 'react-router-dom'
import CV from '../../public/Towhid_CV.pdf'

const Hero = () => {
    return (
        <div className='shadow-xl'>
            <div className="mt-5 flex flex-col lg:flex-row justify-between items-center w-11/12 mx-auto py-5 lg:w-9/12">
            <div className="lg:w-1/2 slide-in-lg">
                <h3 className="text-xl text-center lg:text-left">Hi, I am</h3>
                <h1 className="lg:text-4xl text-2xl text-center font-semibold lg:text-left">Mohammad <span
                        className="text-red-500">Towhidur</span> Rahman Khan</h1>
                <p class="text-center py-5 lg:text-left">I am a professional product manager with 5 years of experience
                    in the field.
                    I have worked with some of the top companies in the world and have helped them to grow their
                    business
                    exponentially. I have a strong understanding of the market and can help you to take your business to
                    the
                    next level.</p>
                <p className="font-medium text-center lg:text-left">BEST SKILL ON</p>
                <div className="flex gap-5 w-16 py-5 justify-center mx-auto lg:justify-start lg:mx-0">
                    <img src="/figma.png" className="rounded-lg bg-gray-100 shadow-xl p-2"/>
                    <img src="/js (1).png" className="rounded-lg bg-gray-100 shadow-xl p-2"/>
                    <img src="/physics.png" className="rounded-lg bg-gray-100 shadow-xl p-2"/>
                </div>
                <div className="flex justify-center lg:justify-start items-center gap-5 py-5">
                    <button
                        className="rounded-lg bg-gray-100 px-8 py-4 text-red-500 shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-500 hover:text-white hover:font-semibold"><Link to={'/contact'}>Hire
                            Me</Link></button>
                    <button
                        className="rounded-lg bg-gray-100 px-8 py-4 text-red-500 shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-500 hover:text-white hover:font-semibold">
                            <a href={CV} download='CV'>Download CV</a></button>
                </div>
            </div>
            <div class="slide-up-lg">
                <img src="/Towhid.png" className="w-96 rounded-lg shadow-2xl"/>
            </div>
        </div>
        </div>
    );
};

export default Hero;