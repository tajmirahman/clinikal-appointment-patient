

const Service = ({ service }) => {
    return (

        <div className="flex flex-col items-center justify-center gap-3 p-6 border rounded-xl cursor-pointer
                    hover:bg-primary hover:text-white transition-all duration-300">

            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                <img className="w-8 h-8 text-primary group-hover:text-white" src={service.icon} alt="" />
               
            </div>

            <p className="text-sm font-medium text-center">{service.disease_title}</p>
        </div>

        // <div className='flex'>

        //         <img src={service.icon} alt="" />
        //         <h2>{service.disease_title}</h2>

        // </div>
    );
};

export default Service;