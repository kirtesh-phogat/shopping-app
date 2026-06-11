import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <ToastContainer position="top-right" autoClose={2500} />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
