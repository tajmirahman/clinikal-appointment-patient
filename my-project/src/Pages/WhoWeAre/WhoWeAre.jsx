import WhatWeAre from '../../assets/image/WhatWeAre.jpg'

const WhoWeAre = () => {
    return (
        <div className='w-9/12 mx-auto flex justify-between items-center gap-3'>
            <h2>What We Do</h2>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
               
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel nihil ipsum, excepturi consequuntur perferendis unde veniam nemo expedita. Architecto!</p>
                </div>
            </div>
            <div>
                <img src={WhatWeAre} alt="" />
            </div>
        </div>
    );
};

export default WhoWeAre;