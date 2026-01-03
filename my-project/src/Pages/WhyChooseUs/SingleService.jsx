import React from 'react';

const SingleService = ({service}) => {
    console.log(service)
    return (
        <div className='flex justify-center items-center gap-3'>
            <div className="card">
                <img className='h-20 w-20 mx-auto' src={service.icon} alt="" />
                <h2 className='text-3xl font-bold'>{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default SingleService;