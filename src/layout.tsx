import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import { Authdrawer } from "./components/Authdrawer";
import { useContext } from "react";
import { DrawerContext } from "./contexts/Drawer.context";

const Layout = () => {
  const { drawer, setDrawer } = useContext(DrawerContext);
  return (
    <div className="relative h-full z-10 w-full scroll-smooth snap-y snap-mandatory">
      {drawer && (
        <AnimatePresence>
          {drawer && <Authdrawer drawer={drawer} setDrawer={setDrawer} />}
        </AnimatePresence>
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
