import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/profile/Sidebar';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import BottomSign from '../../components/common/BottomSign';

function Profile() {
  const data = { name: "Vishesh", about: "Web developers create functional, user-friendly websites and web applications", cont1: 9310365061, cont2: 9266068903 };

  return (
    <>
    <Navbar/>
      <div className="flex w-screen">
        <div className='w-fit bg-gray-50'>
          <Sidebar/>
        </div>
        <div className='w-3/4 p-6'>
          <Outlet/>
        </div>
      </div>
      <Footer/>
      <BottomSign/>
    </>
  );

}

export default Profile