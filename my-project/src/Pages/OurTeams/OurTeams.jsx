import { useEffect, useState } from "react";
import SingleDoctor from "./SingleDoctor";


const OurTeams = () => {

    const [ourTeam, setOurTeam]=useState([]);

    useEffect(()=>{
        fetch ('/ourTeam.json')
       .then((res)=>res.json())
       .then(data=> setOurTeam(data)) 
    },[])


    return (
        <div>
            <h2 className='text-3xl text-center'>Our Teams</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />

            <div>
                {
                    ourTeam.map(singleDoctor=><SingleDoctor
                    key={singleDoctor.id}
                    singleDoctor={singleDoctor}
                    ></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default OurTeams;