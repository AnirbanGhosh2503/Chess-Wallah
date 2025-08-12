import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from "./pages/BlogDetails";
import AboutUs from './pages/AboutUs';
import CoursePage from './pages/CoursePage';
import Layout from "./components/Layout";
import Gallery from './pages/Gallery';
import OurServices from './pages/OurServices';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:level" element={<CoursePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
