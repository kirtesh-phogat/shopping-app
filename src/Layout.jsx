import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      {location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default Layout;
