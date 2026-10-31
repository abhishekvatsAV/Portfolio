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
    <div className={`app-shell ${theme === "dark" ? "theme-dark" : ""}`}>
      <div className="app-grid">
        <aside className="profile-panel">
          <Sidebar />
        </aside>
        <main className="content-panel">
        <Navbar section={section} setSection={setSection} />
        <AnimatePresence mode="wait">
          {section === "about" && <About />}
          {section === "resume" && <Resume />}
          {section === "projects" && <Projects />}
        </AnimatePresence>
        </main>
      </div>
      <div className="grain" aria-hidden="true" />
    </div>
  );
}

export default App;
