import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Eunice Chia",
    country: "USA",
    flag: "/usa.png",
    image: "/pride1.jpg",
    rating: 5,
    message:
      "My son has started learning chess with Chessbrainz Chess Academy since last year Oct. Love how the coaches teach and guide him. He was once demoralized but his coach keeps encouraging and boosting up his spirit. That is what we need in life. Not only for someone who can teach but also someone who put in their heart and soul in their work.",
  },
  {
    name: "TED",
    country: "Singapore",
    flag: "/singapore.png",
    image: "/pride2.jpg",
    rating: 5,
    message:
      "My son has started learning chess with Chessbrainz Chess Academy since last year Oct. Love how the coaches teach and guide him. He was once demoralized but his coach keeps encouraging and boosting up his spirit. That is what we need in life. Not only for someone who can teach but also someone who put in their heart and soul in their work.",
  },
  {
    name: "AARAV",
    country: "India",
    flag: "/india.svg",
    image: "/pride3.jpg",
    rating: 5,
    message:
      "My son has started learning chess with Chessbrainz Chess Academy since last year Oct. Love how the coaches teach and guide him. He was once demoralized but his coach keeps encouraging and boosting up his spirit. That is what we need in life. Not only for someone who can teach but also someone who put in their heart and soul in their work.",
  },
  {
    name: "LISA",
    country: "Canada",
    flag: "/Canada.svg",
    image: "/pride4.jpg",
    rating: 5,
    message:
      "My son has started learning chess with Chessbrainz Chess Academy since last year Oct. Love how the coaches teach and guide him. He was once demoralized but his coach keeps encouraging and boosting up his spirit. That is what we need in life. Not only for someone who can teach but also someone who put in their heart and soul in their work.",
  },
  {
    name: "SUVNEER",
    country: "UK",
    flag: "/UK.svg",
    image: "/pride5.jpg",
    rating: 5,
    message:
      "My son has started learning chess with Chessbrainz Chess Academy since last year Oct. Love how the coaches teach and guide him. He was once demoralized but his coach keeps encouraging and boosting up his spirit. That is what we need in life. Not only for someone who can teach but also someone who put in their heart and soul in their work.",
  }
];

// CSS styles embedded as a string for the artifact
const testimonialStyles = `
.testimonial-section {
  background: linear-gradient(135deg, #F8F8F8 0%, #FAFAFA 100%);
  color: #333;
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
}

.testimonial-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #B87333 0%, #FFC300 50%, #B87333 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 1rem;
  position: relative;
}

.section-title .highlight {
  color: #B87333;
  position: relative;
}

.section-title .highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #FFC300, #B87333);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.testimonial-wrapper {
  position: relative;
}

.testimonial-card {
  background: #B87333;
  border-radius: 25px;
  padding: 2rem;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(184, 115, 51, 0.15);
  margin: 2rem 0.5rem;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 195, 0, 0.1) 0%, rgba(184, 115, 51, 0.05) 100%);
  border-radius: 25px;
}

.testimonial-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(184, 115, 51, 0.25);
}

.testimonial-header {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 1.5rem;
}

.testimonial-img-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #FFC300;
  background: white;
  margin: 0 auto 1rem;
  box-shadow: 0 8px 20px rgba(255, 195, 0, 0.3);
  transition: transform 0.3s ease;
}

.testimonial-card:hover .testimonial-img-wrapper {
  transform: scale(1.1);
}

.testimonial-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.star-rating {
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
}

.star {
  color: #FFC300;
  font-size: 1.4rem;
  text-shadow: 0 2px 4px rgba(255, 195, 0, 0.4);
  filter: drop-shadow(0 0 8px rgba(255, 195, 0, 0.6));
}

.testimonial-body {
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.quote-icon {
  font-size: 3rem;
  color: #FFC300;
  opacity: 0.3;
  margin-bottom: 1rem;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.quote {
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #FFFFFF;
  margin-bottom: 2rem;
  padding: 0 1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.testimonial-footer {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 1rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.country-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.country {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.flag-img {
  width: 36px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.swiper-button-prev,
.swiper-button-next {
  color: #B87333;
  width: 50px;
  height: 50px;
  top: 50%;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(184, 115, 51, 0.2);
  transition: all 0.3s ease;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 18px;
  font-weight: bold;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: #FFC300;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 195, 0, 0.4);
}

.swiper-pagination {
  position: relative;
  margin-top: 3rem;
}

.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  background-color: #B87333;
  opacity: 0.4;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: #FFC300;
  opacity: 1;
  transform: scale(1.3);
}

.stats-section {
  background: linear-gradient(135deg, #B87333 0%, #D4A574 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-top: 4rem;
  text-align: center;
  box-shadow: 0 15px 35px rgba(184, 115, 51, 0.2);
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 195, 0, 0.1) 0%, transparent 70%);
  animation: shimmer 8s linear infinite;
}

@keyframes shimmer {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.stat-item {
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #FFC300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.95;
  font-weight: 500;
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .testimonial-card {
    min-height: 380px;
    padding: 1.5rem;
    margin: 1.5rem 0.25rem;
  }
  
  .testimonial-img-wrapper {
    width: 85px;
    height: 85px;
  }
  
  .quote {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
  
  .name {
    font-size: 1.2rem;
  }
  
  .stats-section {
    padding: 2rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    min-height: 350px;
    padding: 1.25rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
`;

function Testimonials() {
  return (
    <>
      <style>{`
.testimonialSection {
  background: linear-gradient(135deg, #F8F8F8 0%, #FAFAFA 100%);
  color: #333;
  position: relative;
  padding: 3rem 0;
  overflow: hidden;
}

.testimonialSection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.sectionHeader {
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.sectionTitle {
  font-size: 2rem;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 0.75rem;
  position: relative;
}

.highlight {
  color: #667eea;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.sectionSubtitle {
  font-size: 1rem;
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

.testimonialWrapper {
  position: relative;
}

.testimonialCard {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  margin: 1.5rem 0.5rem;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.testimonialCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 20px;
}

.testimonialCard:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.25);
}

.testimonialHeader {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 1rem;
}

.testimonialImgWrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #FFC300;
  background: white;
  margin: 0 auto 0.75rem;
  box-shadow: 0 6px 15px rgba(255, 195, 0, 0.3);
  transition: transform 0.3s ease;
}

.testimonialCard:hover .testimonialImgWrapper {
  transform: scale(1.1);
}

.testimonialImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.starRating {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.star {
  color: #FFC300;
  font-size: 1.2rem;
  text-shadow: 0 1px 3px rgba(255, 195, 0, 0.4);
  filter: drop-shadow(0 0 6px rgba(255, 195, 0, 0.6));
}

.testimonialBody {
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.quoteIcon {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 0.75rem;
  text-align: center;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));
}

.quote {
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  padding: 0 0.75rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.testimonialFooter {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 0.75rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.countryInfo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.country {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.flagImg {
  width: 30px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.testimonialSection :global(.swiper-button-prev),
.testimonialSection :global(.swiper-button-next) {
  color: #667eea;
  width: 42px;
  height: 42px;
  top: 50%;
  background: white;
  border-radius: 50%;
  box-shadow: 0 3px 12px rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

.testimonialSection :global(.swiper-button-prev::after),
.testimonialSection :global(.swiper-button-next::after) {
  font-size: 16px;
  font-weight: bold;
}

.testimonialSection :global(.swiper-button-prev:hover),
.testimonialSection :global(.swiper-button-next:hover) {
  background: #FFC300;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 195, 0, 0.4);
}

.testimonialSection :global(.swiper-pagination) {
  position: relative;
  margin-top: 2rem;
}

.testimonialSection :global(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background-color: #667eea;
  opacity: 0.4;
  transition: all 0.3s ease;
}

.testimonialSection :global(.swiper-pagination-bullet-active) {
  background-color: #FFC300;
  opacity: 1;
  transform: scale(1.3);
}

.statsSection {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  margin-top: 2.5rem;
  text-align: center;
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
}

.statsSection::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: shimmer 8s linear infinite;
}

@keyframes shimmer {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

.statItem {
  color: white;
}

.statNumber {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
  color: #FFC300;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.statLabel {
  font-size: 0.95rem;
  opacity: 0.95;
  font-weight: 500;
}

@media (max-width: 768px) {
  .testimonialSection {
    padding: 2.5rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .sectionTitle {
    font-size: 1.8rem;
  }
  
  .testimonialCard {
    min-height: 280px;
    padding: 1.25rem;
    margin: 1.25rem 0.25rem;
  }
  
  .testimonialImgWrapper {
    width: 70px;
    height: 70px;
  }
  
  .quote {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
  
  .name {
    font-size: 1rem;
  }
  
  .statsSection {
    padding: 1.5rem 1rem;
  }
  
  .statsGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  .statNumber {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .testimonialCard {
    min-height: 260px;
    padding: 1rem;
  }
  
  .statsGrid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .sectionTitle {
    font-size: 1.6rem;
  }
  
  .sectionHeader {
    margin-bottom: 2rem;
  }
}
      `}</style>
      <section className="testimonialSection">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">
              What Parents Say About <span className="highlight">Our Coaching</span>
            </h2>
            <p className="sectionSubtitle">
              Real stories from parents who've seen their children grow through chess
            </p>
          </div>
          
          <div className="testimonialWrapper">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <div className="testimonialCard">
                    <div className="testimonialHeader">
                      <div className="testimonialImgWrapper">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="testimonialImg" 
                        />
                      </div>
                      
                      <div className="starRating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="testimonialBody">
                      <div className="quoteIcon">❝</div>
                      <p className="quote">
                        {testimonial.message}
                      </p>
                    </div>
                    
                    <div className="testimonialFooter">
                      <p className="name">{testimonial.name}</p>
                      <div className="countryInfo">
                        <span className="country">{testimonial.country}</span>
                        <img 
                          src={testimonial.flag} 
                          alt={testimonial.country} 
                          className="flagImg" 
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="statsSection">
            <div className="statsGrid">
              <div className="statItem">
                <div className="statNumber">500+</div>
                <div className="statLabel">Happy Families</div>
              </div>
              <div className="statItem">
                <div className="statNumber">98%</div>
                <div className="statLabel">Satisfaction Rate</div>
              </div>
              <div className="statItem">
                <div className="statNumber">2000+</div>
                <div className="statLabel">Students Coached</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;