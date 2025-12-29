import Header from "./Header";
import bgImage from "/images/operation-theater.png";

const Navbar = () => {
    return (
        <div
            className="w-full min-h-screen bg-gradient-to-r from-[#29A3AA]/20 to-[#5FD1D8]/20 backdrop"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
        >
            {/* overlay */}
            <div className="">

                <Header></Header>

            </div>

            
        </div>
    );
};

export default Navbar;
