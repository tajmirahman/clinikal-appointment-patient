import { useEffect, useState } from "react";
import SingleDoctor from "./SingleDoctor";



const OurTeams = () => {

    const [ourTeam, setOurTeam] = useState([]);
    const [startIndex, setStartIndex] = useState(0);


    useEffect(() => {
        fetch('/ourTeam.json')
            .then((res) => res.json())
            .then(data => setOurTeam(data))
    }, [])


    useEffect(() => {
        const slider = setInterval(() => {
            setStartIndex((prev) =>
                prev + 1 > ourTeam.length - 6 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(slider);
    }, [ourTeam.length]);

    const visibleDoctors = ourTeam.slice(startIndex, startIndex + 3);






    return (
        <div>
            <h2 className='text-3xl text-center'>Our Teams</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />

            <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2fa4aa] to-[#5fd1d8]">
                <div className="flex gap-8 items-center">
                    {
                        visibleDoctors.map((doc, index) => {
                            const isActive = index === startIndex;
                            return (
                                <SingleDoctor doc={doc} isActive={isActive}></SingleDoctor>

                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OurTeams;