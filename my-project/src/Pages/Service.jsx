

const Service = ({ service }) => {
    return (

        // <div className="flex flex-col items-center justify-center gap-3 p-6 border rounded-xl cursor-pointer
        //             hover:bg-primary hover:text-white transition-all duration-300">

        //     <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
        //         <img className="w-8 h-8 text-primary group-hover:text-white" src={service.icon} alt="" />

        //     </div>

        //     <p className="text-sm font-medium text-center">{service.disease_title}</p>
        // </div>

        <div className="space-y-5">

            <div>
                <figure className="flex flex-col items-center justify-center w-20 h-20 *:border mx-auto border rounded-xl cursor-pointer hover:bg-[#32c1ce] hover:text-white transition-all duration-300">
                    <img className="flex items-center justify-center w-16 h-16 rounded-lg" src={service.icon} alt="" />
                </figure>
                <h2 className="text-sm font-medium text-center">{service.disease_title}</h2>

            </div>
            

        </div>
    );
};

export default Service;