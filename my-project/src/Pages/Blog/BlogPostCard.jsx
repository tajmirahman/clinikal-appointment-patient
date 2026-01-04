import { Link } from 'react-router-dom';
import proPic from '../../assets/image/download.png'
import { FaEye } from 'react-icons/fa';

const BlogPostCard = ({ newBlog }) => {
    return (
        <div className="card shadow-lg p-3">
            <figure>
                <img className='w-full h-full object-cover' src={newBlog.image} alt="" />
            </figure>

            <div className=''>
                <h2 className='mt-3'>{newBlog.title.length > 33 ? newBlog.title.slice(0, 25) + '...' : newBlog.title}</h2>
                <hr className='w-[300px]  mx-auto border-t-2 my-2' />
            </div>

            <div className='flex gap-3'>
                <div className='flex justify-center items-center border-r-2'>
                    <figure className='w-12 h-12 object-cover'>
                        <img className='w-12 h-12' src={proPic} alt="" />
                    </figure>
                    <p className='text-sm mr-2'>{newBlog.author}</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaEye />
                    <Link to={'/blog-post'} className='text-sm'>read more</Link>
                </div>
            </div>

        </div>
    );
};

export default BlogPostCard;