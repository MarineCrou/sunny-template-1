import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
