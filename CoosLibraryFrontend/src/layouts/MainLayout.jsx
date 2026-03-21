// include Navbar + Footer
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BottomSign from '../components/common/BottomSign';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="h-fit">
        <Outlet /> {/* nested route content */}
      </main>
      <Footer />
      <BottomSign/>
    </div>
  );
};

export default MainLayout;