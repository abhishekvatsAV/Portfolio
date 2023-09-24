import { AnimatePresence } from "framer-motion";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { sections } from "./types";
import { useState } from "react";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const [section, setSection] = useState<sections>("about");
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div
      className={`grid grid-cols-12 gap-6 px-5 lg:px-48 py-14 sm:px-20 md:px-32 ${
        theme === "dark" && " !text-white"
      } min-h-screen h-full`}
    >
      <div
        className={`col-span-12 p-4 overflow-hidden text-center bg-white lg:col-span-3 rounded-2xl  shadow-custom-light ${
          theme === "dark" && "!bg-dark !shadow-custom-dark"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl  shadow-custom-light overflow-hidden ${
          theme === "dark" && "!bg-dark !shadow-custom-dark"
        }`}
      >
        <Navbar section={section} setSection={setSection} />
        <AnimatePresence mode="wait">
          {section === "about" && <About />}
          {section === "resume" && <Resume />}
          {section === "projects" && <Projects />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
