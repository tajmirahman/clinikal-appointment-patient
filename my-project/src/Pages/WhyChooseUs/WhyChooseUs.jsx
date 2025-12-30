import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const WhyChooseUs = () => {
    const [ourService,setOurService]=useState([]);

    useEffect(()=>{
        fetch("/medical_services.json")
        .then((res)=> res.json())
        .then(data=>setOurService(data));
    },[])
    return (
        <div>
            <h2 className='text-3xl text-center'>Why Choose Us</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />
            <div>
                {
                    ourService.map(service=><SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;