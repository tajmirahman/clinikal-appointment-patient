import proPic from '../../assets/image/download.png'

const LatestPostCard = ({ newPost }) => {
    console.log(newPost)
    return (
        <div className="card w-96 shadow-lg p-3">
            <figure>
                <img className='w-full h-full object-cover' src={newPost.image} alt="" />
            </figure>

            <div className=''>
                <h2 className='mt-3'>{newPost.title.length > 33 ?newPost.title.slice(0,25)+ '...' :newPost.title}</h2>
                <hr className='w-[200px]  mx-auto border-t-2' />
            </div>

            <div className='flex justify-center items-center gap-5 '>
                <div className='flex justify-center items-center '>
                    <figure className='w-16 h-12 object-cover'>
                        <img className='w-12 h-12' src={proPic} alt="" />
                    </figure>
                    <p>{newPost.author}</p>
                </div>
                <div className=''>
                    <button>read more</button>
                </div>
            </div>

        </div>
    );
};

export default LatestPostCard;