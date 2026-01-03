import React from 'react';

const SingleDoctor = ({singleDoctor}) => {
    return (
        <div>
            <div className="card">
                <img src={singleDoctor.img} alt="" />
                <h2>{singleDoctor.doctor_name}</h2>
                <h3>{singleDoctor.specialist}</h3>
            </div>
        </div>
    );
};

export default SingleDoctor;