import { useEffect, useState } from "react";


const LatestPost = () => {

    const [latestPost, setLatestPost]=useState([]);

    useEffect(()=>{
        fetch ('/latestPost.json')
        .then(res=>res.json())
        .then(data=> setLatestPost(data))
    },[])
    
    return (
        <div>
            THis is latest post
        </div>
    );
};

export default LatestPost;