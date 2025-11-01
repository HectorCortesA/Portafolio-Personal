import "./App.css";
import Home from "./pages/Home.tsx";
import UI from "./pages/UI.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui" element={<UI />} />
      </Routes>
    </div>
  );
}

export default App;
