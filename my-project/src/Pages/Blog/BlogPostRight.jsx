import React from 'react';
import RecentPost from './RecentPost';

const BlogPostRight = ({blogPost}) => {


    return (

        <div className=''>
            <section>
                <RecentPost blogPost={blogPost}></RecentPost>
            </section>
        </div>

    );
};

export default BlogPostRight;