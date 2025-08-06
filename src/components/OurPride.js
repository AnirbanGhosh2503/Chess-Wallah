// src/components/Home/OurPride.js
import React from 'react';
import './OurPride.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const prideData = [
  {
    name: "TEDDY",
    age: 6,
    country: "USA",
    img: "/pride1.jpg",
    flag: "/usa.png",
    achievement: "1st Prize 🏆 at the New York Chess Championship in the Under-6 Age Category"
  },
  {
    name: "TED",
    age: 7,
    country: "Singapore",
    img: "/pride2.jpg",
    flag: "/singapore.png",
    achievement: "Winner at the CASPL FIDE-Rated Chess Tournament in Singapore"
  },
  {
    name: "AARAV",
    age: 8,
    country: "India",
    img: "/pride3.jpg",
    flag: "/india.svg",
    achievement: "Bronze at the Delhi Chess League in Under-8 Category"
  },
  {
    name: "LISA",
    age: 9,
    country: "Canada",
    img: "/pride4.jpg",
    flag: "/Canada.svg",
    achievement: "Top 5 Finalist at Ontario Chess Grand Prix"
  },
  {
    name: "SUVNEER",
    age: 10,
    country: "UK",
    img: "/pride5.jpg",
    flag: "/UK.svg",
    achievement: "Won Junior Blitz Tournament in London"
  }
];

const OurPride = () => {
  return (
    <section className="our-pride-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5">Our Students <span className="highlight">Our Pride</span></h2>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {prideData.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="pride-card">
                <div className="student-img-wrapper">
                  <img src={student.img} alt={student.name} className="student-img" />
                </div>
                <div className="pride-card-body">
                  <h4>{student.name}</h4>
                  <p className="age">Age: {student.age}</p>
                  <p className="achievement">{student.achievement}</p>
                  <img src={student.flag} alt={student.country} className="flag-img" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPride;
