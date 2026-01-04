import { useLoaderData, useParams } from "react-router-dom";
import BlogDetailsCard from "./BlogDetailsCard";


const BlogPostDetails = () => {
    const blogPost=useLoaderData();
    const id=useParams();
    console.log({blogPost,id})
    

    return (
        <div>
            {
                blogPost.map(singleBlog=><BlogDetailsCard key={singleBlog.id} singleBlog={singleBlog}></BlogDetailsCard>)
            }
        </div>
    );
};

export default BlogPostDetails;