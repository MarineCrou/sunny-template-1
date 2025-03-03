import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import BlogArticle from "./Components/BlogArticle";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/blog/blog-article" element={<BlogArticle />} />
        </Routes>
      </Router>
    </div>
  );
}
