
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import WhoWeAre from '../Pages/WhoWeAre/WhoWeAre';

const HomeLayout = () => {
    return (
        <div className=''>
            {/* Navber section  */}
                <Navber></Navber>
            
                <aside  className='bg-[#f5f9fc]'>
                    <Outlet></Outlet>
                </aside>

                <aside>
                    <WhoWeAre></WhoWeAre>
                </aside>


            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;