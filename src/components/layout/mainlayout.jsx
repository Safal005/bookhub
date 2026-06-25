import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
          <Outlet />
      </main>
      <Footer />
    </>
  );
};
