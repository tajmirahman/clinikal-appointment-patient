import whatWeDo from '../assets/image/what-we-do.jpg'

const WhatWeDo = () => {
    return (
        <div className='flex  min-h-screen my-10 gap-5 w-9/12 mx-auto'>

            <div className='flex-1  '>
                <figure className='w-full h-[500px] items-center object-cover'>
                    <img className='w-full h-[500px] items-center object-cover border-2 border-blue-500' src={whatWeDo} alt="" />
                </figure>
            </div>
            <div className='flex-1'>
                <h2>WHAT WE DO</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima iusto praesentium maiores corporis perspiciatis itaque, molestiae dolorum eius ipsam quos fugit sunt consequuntur numquam omnis, doloremque labore quae rem!</p>
            </div>

        </div>
    );
};

export default WhatWeDo;