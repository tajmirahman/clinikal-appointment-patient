import { Link, useLoaderData } from 'react-router-dom';
import whatWeDo from '../assets/image/what-we-do.jpg'
import Service from './Service';

const WhatWeDo = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='w-9/12 mx-auto min-h-screen my-10'>
            <h2 className='text-center my-10 text-3xl'>WHAT WE DO</h2>

            <div className='flex gap-5 '>
                <div className='flex-1  '>
                    <figure className='w-full h-[500px] items-center object-cover'>
                        <img className='w-full h-[500px] items-center object-cover border-2 border-blue-500' src={whatWeDo} alt="" />
                    </figure>
                </div>
                <div className='flex-1 space-y-4'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima iusto praesentium maiores corporis perspiciatis itaque, molestiae dolorum eius ipsam quos fugit sunt consequuntur numquam omnis, doloremque labore quae rem!</p>
                    <div className='grid grid-cols-3 grid-rows-2 gap-6'>
                        {
                            data.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>

                    <Link to={'/service'} className="btn btn-outline btn-accent hover:bg-[#32c1ce] hover:text-white">show more</Link>
                </div>
            </div>

        </div>
    );
};

export default WhatWeDo;