import React from 'react';

const BlogPostRight = ({blogPost}) => {

    return (
        <>
        <div>
            <h2 className='text-center text-xl'>Recent Post</h2>
            <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-1' />
            <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />
        </div>
        <div className='w-full'>
            {
                blogPost?.map(blog=>(
                    <div className='flex justify-center items-center gap-4'>
                        <img className='w-16 h-16 object-cover' src={blog.image} alt="" />
                        <div className='text-sm'>
                            <h2>{blog.title}</h2>
                            <p>{blog.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
};

export default BlogPostRight;