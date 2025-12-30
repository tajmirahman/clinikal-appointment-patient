import React from 'react';

const LeftSide = ({showData}) => {
    return (
        <div className='space-y-5'> 
            <img className='w-full' src={showData.image_url} alt="" />
            <p className='text-justify'>{showData.details}</p>
        </div>
    );
};

export default LeftSide;