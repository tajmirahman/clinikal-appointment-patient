import { useEffect, useState } from "react";
import LatestPostCard from "./LatestPostCard";


const LatestPost = () => {

    const [latestPost, setLatestPost]=useState([]);

    useEffect(()=>{
        fetch ('/latestPost.json')
        .then(res=>res.json())
        .then(data=> setLatestPost(data))
    },[])
    
    return (
        <div>
           {
            latestPost.map(newPost=><LatestPostCard 
                key={newPost.id} 
                newPost={newPost}
                ></LatestPostCard>)
           }
        </div>
    );
};

export default LatestPost;