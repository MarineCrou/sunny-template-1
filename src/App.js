import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
