import React from 'react';

const RightSide = ({data}) => {
    return (
        <div className='shadow p-3'>
            
            <h2 className="text-center text-2xl">Our Services</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />
            <hr className="w-[50px] mx-auto border-t-2 border-black mt-2" />

            <div className='space-y-5 mt-10'>
                {
                    data.map(singleData=>(
                        <div className='flex justify-start items-center gap-3 '>
                            <img className='w-8 h-8 object-contain' src={singleData.icon} alt="" />
                            <h1 className='text-sm'>{singleData.disease_title}</h1>
                          
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RightSide;