
import { useLoaderData } from 'react-router-dom';
import Header from '../../Components/Header';
import LatestPost from '../LatestPost/LatestPost';
import BlogPostCard from './BlogPostCard';

const BlogPost = () => {

    const blogPost=useLoaderData();


    return (
        <div className=''>
            <section className='bg-[#32c1ce]'>

                <Header></Header>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-3 w-9/12 mx-auto'>
                {
                    blogPost.map(newBlog=><BlogPostCard newBlog={newBlog}></BlogPostCard>)
                }
            </div>
        </div>
    );
};

export default BlogPost;