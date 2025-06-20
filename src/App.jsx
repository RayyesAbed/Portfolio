import "./App.css";
import CoffeeLoader from "./components/loading/CoffeeLoader";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./pages/welcome/Welcome";
import Projects from "./pages/projects/Projects";
import ProjectDetails from "./components/project/ProjectDetails";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited"); // If the user is visiting the page for the first time

    if (!hasVisited) {
      setIsLoading(true);

      localStorage.setItem("hasVisited", "true");

      setTimeout(() => {
        setIsLoading(false);
      }, 9000);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <CoffeeLoader />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                  path="/projects/:projectName"
                  element={<ProjectDetails />}
                />
              </Routes>
              <Footer />
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
