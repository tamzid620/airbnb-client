import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div className='pt-28 pb-20'><Outlet></Outlet></div>
            <Footer/>
        </div>
    );
};

export default Layout;