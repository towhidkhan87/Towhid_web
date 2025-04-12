import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = ({handlefilter}) => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('../assets/services.json')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto my-10 gap-4 cursor-pointer'>
            {
                categories.map(category => <Category handlefilter={handlefilter} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;