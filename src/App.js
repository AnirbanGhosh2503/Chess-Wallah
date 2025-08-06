import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChessWallah from "./components/Home/WhyChessWallah";
import SrinathVideo from './components/Home/SrinathVideo';
import Testimonials from './components/Testimonials';
import OurPride from './components/OurPride';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyChessWallah />
      <SrinathVideo />
      <Testimonials />
      <OurPride />
      <Courses />
    </div>
  );
}

export default App;
