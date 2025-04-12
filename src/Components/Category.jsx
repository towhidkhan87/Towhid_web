import React from 'react';

const Category = ({ category, handlefilter }) => {
    return (
        <div onClick={()=>handlefilter(category.category)} className='border bg-cyan-400 text-white font-semibold text-center px-4 py-4 hover:underline'>
            <h1>{category.category}</h1>
        </div>
    );
};

export default Category;