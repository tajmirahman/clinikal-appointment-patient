import { useEffect, useRef, useState } from "react";
import SingleDoctor from "./SingleDoctor";

const OurTeams = () => {
    const [ourTeam, setOurTeam] = useState([]);
    const [active, setActive] = useState(0);

    const visibleCard = 3;
    const intervalRef = useRef(null);

    useEffect(() => {
        if (ourTeam.length < visibleCard) return;
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setActive(prev => {
                if (prev >= ourTeam.length - visibleCard) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);

        return () => {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [ourTeam.length]);

    const showCardDoctor = ourTeam.slice(active, active + visibleCard);

    useEffect(() => {
        fetch("/ourTeam.json")
            .then(res => res.json())
            .then(data => setOurTeam(data));
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#2fa4aa] to-[#5fd1d8] flex justify-center items-center">
            <div className="flex gap-5 items-center">
                {showCardDoctor.map((doc, index) => (
                    <SingleDoctor
                        key={doc.id}
                        doc={doc}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeams;
