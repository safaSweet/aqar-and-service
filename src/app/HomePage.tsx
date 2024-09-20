import Header from '../components/basics/Header';
import Sidebar from '../components/basics/Sidebar';
import { Outlet } from 'react-router-dom';
function HomePage() {

    return (
        <>
            <div className=' row' style={{
                width: '88.7%'
            }}>
                <Header />
                <div className=' p-4 mt-5'  >
                    <Outlet />
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default HomePage;
