
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';

const HomeLayout = () => {
    return (
        <div className=''>
            {/* Navber section  */}
                <Navber></Navber>
            
                <main >
                    <Outlet></Outlet>
                </main>


            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;