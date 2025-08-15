import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Simran Oberoi",
    country: "India",
    flag: "/india.svg",
    image: "/simran.jpg",
    message:
      "My son has been learning from the Coach at Chess Wallah for several months now and it has been an excellent experience! Not only is he enjoying the classes and the experience, he is learning a lot and improving his game through extensive practice. Would highly recommend this!",
  },
  {
    name: "Poovandhree Naidoo",
    country: "South Africa",
    flag: "/southafrica.png",
    image: "/poovandhree.jpg",
    message:
      "Chess Wallah offers fantastic online classes with brilliant coaches. My 9-year-old son from South Africa enjoys this platform and has improved his game. I highly recommend Chess Wallah!",
  },
  // Add more testimonials if needed
];

function Testimonials() {
  return (
    <section className="testimonial-section py-5">
      <h2 className="text-center black mb-5">
        Our Students’ <span className="highlight">Happy Parents</span>
      </h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={40}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              </div>
              <div className="testimonial-body text-white">
                <p className="quote">❝ {testimonial.message} ❞</p>
                <p className="name">— {testimonial.name}</p>
                <img src={testimonial.flag} alt={testimonial.country} className="flag-img" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
