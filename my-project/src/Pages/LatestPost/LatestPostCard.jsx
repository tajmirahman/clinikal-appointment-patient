import proPic from '../../assets/image/download.png'

const LatestPostCard = ({ newPost }) => {
    console.log(newPost)
    return (
        <div className="card w-96 ">
            <figure>
                <img src={newPost.image} alt="" />
            </figure>


            <div>
                <h2>{newPost.title}</h2>
                <div className='flex justify-center items-center gap-5'>
                    <div className='flex justify-center items-center gap-4'>
                        <img className='bg-red-300' src={newPost.proPic} alt="" />
                        <p>{newPost.author}</p>
                    </div>
                    <div className=''>
                        <button>read more</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LatestPostCard;