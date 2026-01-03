import React from 'react';

const SingleDoctor = ({ doc, active, index }) => {

    const isActive = index === active;

    return (
        <div>
            {/* <div className="card">
                <img src={singleDoctor.img} alt="" />
                <h2>{singleDoctor.doctor_name}</h2>
                <h3>{singleDoctor.specialist}</h3>
            </div> */}

            <div
                key={doc.id}
                className={`transition-all duration-700 rounded-xl overflow-hidden shadow-xl
                ${isActive
                        ? "w-72 bg-white scale-110"
                        : "w-60 bg-white/70 scale-90 blur-[1px]"
                    }`}
            >
                <img
                    src={doc.img}
                    alt={doc.doctor_name}
                    className="h-64 w-full object-cover"
                />

                <div className="p-5 text-center">
                    <h2 className="text-lg font-semibold">{doc.doctor_name}</h2>
                    <p className="text-sm text-gray-500">{doc.specialist}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleDoctor;