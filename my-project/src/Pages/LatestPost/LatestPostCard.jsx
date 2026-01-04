import React from 'react';

const LatestPostCard = ({ newPost }) => {
    console.log(newPost)
    return (
        <div className="card">
            <figure>
                <img src={newPost.image} alt="" />
            </figure>

            {/* <div>
                data
            </div> */}

            {/* <div>
                <h2>{newPost.title}</h2>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>{newPost.author}</p>
                    </div>
                    <div>
                        <button>read more</button>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default LatestPostCard;