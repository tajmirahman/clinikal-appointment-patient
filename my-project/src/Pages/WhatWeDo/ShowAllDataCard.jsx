import { FaWheelchair } from "react-icons/fa";

const ShowAllDataCard = ({ showAllData }) => {

    console.log(showAllData)

    return (
        <div className="card bg-white shadow-xl rounded-2xl overflow-hidden relative">

            {/* Image */}
            <figure>
                <img
                    src={showAllData.image_url}
                    
                    alt="Skin Care"

                    className=" h-60 w-full object-cover transition-all duration-300 ease-in-out
                    hover:scale-125 hover:rotate-12"
                />
            </figure>

            {/* Icon Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 top-52">
                <div className="w-16 h-16 rounded-full  flex items-center justify-center shadow-lg *:border-4 border-sky-500">
                    <img className="w-16 h-16 rounded-full object-cover hover:bg-[#32c1ce]" src={showAllData.icon} alt="" />
                </div>
            </div>

            {/* Content */}
            <div className="card-body text-center mt-6">
                <h2 className="card-title justify-center text-xl font-semibold">
                    {showAllData.disease_title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                    {showAllData.details}
                </p>

                <div className="mt-3">
                    <button className="text-primary font-semibold hover:underline">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowAllDataCard;