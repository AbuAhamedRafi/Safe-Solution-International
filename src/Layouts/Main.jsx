import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
