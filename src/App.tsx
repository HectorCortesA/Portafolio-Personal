import "./App.css";
import Home from "./pages/Home.tsx";
import UI from "./pages/UI.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/contact.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui" element={<UI />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
