import { useEffect, useState } from "react";
import LatestPostCard from "./LatestPostCard";


const LatestPost = () => {

    const [latestPost, setLatestPost] = useState([]);

    useEffect(() => {
        fetch('/latestPost.json')
            .then(res => res.json())
            .then(data => setLatestPost(data))
    }, [])

    return (
        <div>
            <h2 className='text-3xl text-center'>Latest Post</h2>
            <hr className="w-[200px] mx-auto border-t-2 border-black" />
            <div>
                {
                    latestPost.map(newPost => <LatestPostCard
                        key={newPost.id}
                        newPost={newPost}
                    ></LatestPostCard>)
                }
            </div>
        </div>
    );
};

export default LatestPost;