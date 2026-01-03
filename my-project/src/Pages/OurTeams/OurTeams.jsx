import { useEffect, useState } from "react";
import SingleDoctor from "./SingleDoctor";



const OurTeams = () => {

    const [ourTeam, setOurTeam] = useState([]);
    const [active, setActive] = useState(0);

    const visibaleCard = 3;

    useEffect(() => {
        const intervle = setInterval(() => {
            setActive((prev) => {
                if (prev >= ourTeam.length - visibaleCard) {
                    return 0;
                }
                else{
                    return prev + 1;
                }
            });
        }, 3000);

        return () => {
            clearInterval(intervle);
        }
    }, [ourTeam.length]);

    const showCardDoctor = ourTeam.slice(active, active + visibaleCard)



    useEffect(() => {
        fetch('/ourTeam.json')
            .then((res) => res.json())
            .then(data => setOurTeam(data))
    }, []);



    return (
        <div>
            <h2 className='text-3xl text-center'>Our Teams</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />

            {/* <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2fa4aa] to-[#5fd1d8]">
                <div className="flex gap-8 items-center">

                </div>
            </div> */}

            <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2fa4aa] to-[#5fd1d8]">
                <div className="flex gap-5 items-center">
                    {
                        showCardDoctor.map((doc, index) => <SingleDoctor
                            key={doc.id}
                            index={index}
                            doc={doc}
                            active={active}

                        ></SingleDoctor>)

                    }
                </div>
            </div>

        </div>
    );
};

export default OurTeams;