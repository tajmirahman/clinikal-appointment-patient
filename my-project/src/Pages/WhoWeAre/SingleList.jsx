import React from 'react';

const SingleList = ({list}) => {

    return (
        <div>
            <div>
                
            </div>
            <div>
                <h2>{list.count}</h2>
                <h2>{list.label}</h2>
            </div>
        </div>
    );
};

export default SingleList;