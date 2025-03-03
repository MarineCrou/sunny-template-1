import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import BlogArticle from "./Components/BlogArticle";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/blog-article" element={<BlogArticle />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
