import React, { useEffect, useState } from 'react';

const Featured = () => {
    const [featured, setfeatured] = useState([])

    useEffect(() => {
        fetch('../assets/services.json')
            .then(res => res.json())
            .then(data => setfeatured(data))
    }, [])

    const filterednew = featured.filter(feature => feature.productDisplayCategory === "Featured")

    return (
        <div className='bg-gradient-to-tr from-white via-green-300 to-accent h-full w-full shadow-lg shadow-accent-content mb-10'>
            <div className='flex justify-between items-center w-11/12 mx-auto gap-10'>

                <div className='flex justify-around items-center text-center relative w-2/4 box-decoration-slice bg-linear-to-bl from-gray-500 to-white shadow-lg shadow-accent-content'>

                    <div className='z-10 absolute'>
                        <h1 className='text-6xl font-extrabold pulse-twice text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Featured Services</h1>
                        <h1 className='mt-4 mx-10 text-lg'>Welcome the season of renewal with our Spring Awakening Collection, inspired by the beauty of blooming flowers and the magic of nature. This collection features delicate flower earrings, enchanting butterfly earrings, and nature-inspired designs that capture the essence of spring.</h1>
                    </div>
                    <img className='opacity-50 w-72' src="../../public/Data Visual.webp" />
                </div>
                <div className='grid grid-cols-2 gap-4 w-2/4 py-5'>
                    {
                        filterednew.map(feature => (
                            <div className="card-1 w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <figure>
                                    <img className='w-full h-48 object-cover rounded-t-lg relative'
                                        src={feature.image} />
                                </figure>
                                <div className="card-side p-4">
                                    <h2 className="card-title font-bold text-xl mb-2">{feature.name}</h2>
                                    <button className='btn btn-accent absolute bottom-25 left-0'>USD${feature.price_range}</button>
                                    <button className='btn btn-neutral absolute -top-15 -right-8.5 rotate-90'>{feature.productDisplayCategory}</button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Featured;