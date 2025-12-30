
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import WhoWeAre from '../Pages/WhoWeAre/WhoWeAre';
import WhyChooseUs from '../Pages/WhyChooseUs/WhyChooseUs';

const HomeLayout = () => {
    return (
        <div className=''>
            {/* Navber section  */}
                <Navber></Navber>
            
                <aside>
                    <Outlet></Outlet>
                </aside>

                <aside >
                    <WhoWeAre></WhoWeAre>
                </aside>

                <aside>
                    <WhyChooseUs></WhyChooseUs>
                </aside>


            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;