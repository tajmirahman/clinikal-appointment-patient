import Header from "./Header";
import bgImage from "/images/operation-theater.png";

const Navbar = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
        >
            {/* overlay */}
            <div className="hero-overlay bg-gradient-to-r from-[#29A3AA]/20 to-[#5FD1D8]/20 backdrop">

                <Header></Header>

            </div>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">
                        Trusted Surgical Care
                    </h1>
                    <p className="mb-5 text-lg">
                        Professional doctors. Modern operation theaters.
                        Your health is our highest priority.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button className="btn btn-primary">
                            Get Appointment
                        </button>
                        <button className="btn btn-outline btn-secondary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
