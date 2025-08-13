import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChessWallah from "../components/Home/WhyChessWallah";
import SrinathVideo from '../components/Home/SrinathVideo';
import Testimonials from '../components/Testimonials';
import OurPride from '../components/OurPride';
import Courses from '../components/Courses';
import CommunitySection from '../components/CommunitySection';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import ReelsSection from '../components/ReelsSection';
import WhyChess from '../components/WhyChess';
import FAQSection from '../components/FAQSection';
import LearningSection from '../components/LearningSection';
import left from '../assets/left.jpg';
import right from '../assets/right.jpg';
import Footer from '../components/Footer';
import FreeDemoModal from '../components/FreeDemoModal';

function Home() {
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  return (
    <>
      <FreeDemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <Hero />
      <WhyChessWallah />
      {/* <SrinathVideo /> */}
      <Testimonials />
      <OurPride />
      <Courses />
      <CommunitySection />
      <AboutUsSection />
      <ReelsSection />
      <WhyChess />
      <FAQSection />

      <LearningSection
        heading="Learn from the Best Chess Academy in India"
        imageURL={left}
        points={[
          "You need to learn the art of playing chess from the experts.",
          "We are a reputed online chess academy with global reach.",
          "Strong presence in 30+ countries with students from 4+ years old.",
          "Train your child for skill development and a career in chess.",
        ]}
      />

      <LearningSection
        heading="Why Our Syllabus Works"
        imageURL={right}
        reverse
        points={[
          "Comprehensive syllabus designed by top instructors.",
          "FIDE-rated trainers with personalized attention.",
          "Weekly tournaments to build confidence.",
        ]}
      />

    </>
  );
}

export default Home;
