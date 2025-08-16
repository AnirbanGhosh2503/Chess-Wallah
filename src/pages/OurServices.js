import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Since we can't import actual images in this environment, using placeholder
const studentImage = "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500";

const AnimatedSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      willChange: 'transform, opacity'
    }}>
      {children}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(10, 36, 99, 0.15)' 
          : '0 8px 25px rgba(10, 36, 99, 0.08)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        border: '1px solid rgba(10, 36, 99, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #0A2463, #1e3a8a)',
        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease'
      }} />
      
      <div style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease'
      }}>
        {icon}
      </div>
      <h4 style={{
        color: '#0A2463',
        marginBottom: '1rem',
        fontSize: '1.3rem',
        fontWeight: '600'
      }}>
        {title}
      </h4>
      <p style={{
        color: '#2D2D2D',
        margin: 0,
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
};

const ServiceSection = ({ title, description, features, image, imageAlt, reverse = false, delay = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <AnimatedSection delay={delay}>
      <section style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        padding: '4rem 3rem',
        marginBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(10, 36, 99, 0.05)'
      }}
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(10, 36, 99, 0.05), rgba(10, 36, 99, 0.1))',
          borderRadius: '50%',
          transform: sectionHovered ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.6s ease'
        }} />
        
        <div className="row align-items-center">
          <div className={`col-md-6 ${reverse ? 'order-md-2' : ''}`}>
            <div style={{ paddingRight: reverse ? '0' : '2rem', paddingLeft: reverse ? '2rem' : '0' }}>
              <h2 style={{
                color: '#0A2463',
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '2rem',
                position: 'relative'
              }}>
                {title}
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #0A2463, #1e3a8a)',
                  borderRadius: '2px'
                }} />
              </h2>
              
              <p style={{
                fontSize: '1.2rem',
                marginBottom: '3rem',
                color: '#2D2D2D',
                lineHeight: '1.8'
              }}>
                {description}
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #F8F8F8 0%, rgba(10, 36, 99, 0.03) 100%)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(10, 36, 99, 0.1)'
              }}>
                <h4 style={{
                  color: '#0A2463',
                  marginBottom: '1.5rem',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  Key Features:
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        transform: sectionHovered ? 'translateX(8px)' : 'translateX(0)',
                        transition: `all 0.3s ease ${index * 0.1}s`
                      }}
                    >
                      <div style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#0A2463',
                        borderRadius: '50%',
                        marginRight: '1rem',
                        flexShrink: 0
                      }} />
                      <span style={{
                        color: '#2D2D2D',
                        fontSize: '1.05rem',
                        fontWeight: '500'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`col-md-6 mt-4 mt-md-0 ${reverse ? 'order-md-1' : ''}`}>
            <div style={{
              position: 'relative',
              textAlign: 'center',
              padding: '2rem'
            }}>
              {/* Image container with loading state */}
              <div style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: imageLoaded 
                  ? '0 20px 60px rgba(10, 36, 99, 0.25)' 
                  : '0 10px 30px rgba(10, 36, 99, 0.15)',
                transition: 'all 0.6s ease'
              }}>
                <img
                  src={image}
                  alt={imageAlt}
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    display: 'block',
                    transform: sectionHovered ? 'scale(1.01)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    opacity: imageLoaded ? 1 : 0
                  }}
                />
                
                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#F8F8F8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: '#0A2463'
                  }}>
                    Loading...
                  </div>
                )}
              </div>
              
              {/* Decorative background element */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '200px',
                height: '200px',
                background: 'linear-gradient(45deg, rgba(10, 36, 99, 0.1), transparent)',
                borderRadius: '50%',
                zIndex: -1,
                transform: sectionHovered ? 'rotate(10deg)' : 'rotate(0deg)',
                transition: 'transform 0.8s ease'
              }} />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default function OurServices() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      backgroundColor: '#F8F8F8',
      color: '#2D2D2D',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      minHeight: '100vh'
    }}>
      {/* Enhanced Header Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A2463 0%, #1e3a8a 100%)',
        color: 'white',
        padding: '6rem 1rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        <div className="container" style={{
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: 'white',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: '1.4rem',
            maxWidth: '700px',
            margin: '0 auto',
            opacity: headerVisible ? 0.95 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
          }}>
            Helping you improve your game with personalized and group training
          </p>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
          `}
        </style>
      </section>

      {/* Main Content Container */}
      <div className="container" style={{ padding: '6rem 1rem' }}>
        
        {/* Services Overview Cards */}
        <AnimatedSection delay={400}>
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <h2 style={{
              color: '#0A2463',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '3rem'
            }}>
              Why Choose Our Training?
            </h2>
            
            <div className="row g-4">
              <div className="col-md-4">
                <FeatureCard
                  icon="🎯"
                  title="Expert Coaching"
                  description="Learn from experienced coaches who understand your unique learning style and adapt their teaching accordingly."
                />
              </div>
              <div className="col-md-4">
                <FeatureCard
                  icon="📈"
                  title="Proven Results"
                  description="Our structured approach has helped hundreds of students improve their game and achieve their chess goals."
                />
              </div>
              <div className="col-md-4">
                <FeatureCard
                  icon="🏆"
                  title="Flexible Learning"
                  description="Choose from individual sessions or group classes that fit your schedule and learning preferences."
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 1-on-1 Classes */}
        <ServiceSection
          title="1-on-1 Classes"
          description="Get personalized coaching tailored to your skill level and goals. Our expert coaches provide focused attention to help you improve faster with structured lessons and detailed analysis of your games."
          features={[
            "Personalized lesson plans designed for your skill level",
            "In-depth game analysis & strategy improvement",
            "Flexible scheduling to fit your availability",
            "One-on-one attention for faster progress"
          ]}
          image={studentImage}
          imageAlt="1-on-1 Coaching"
          delay={600}
        />

        {/* Group Classes */}
        <ServiceSection
          title="Group Classes"
          description="Learn together in an interactive and competitive environment. Group classes allow students to challenge each other, improve their skills, and develop teamwork while having fun with fellow chess enthusiasts."
          features={[
            "Engaging group activities and tournaments",
            "Peer-to-peer learning and collaboration",
            "Affordable pricing with excellent value",
            "Social learning environment"
          ]}
          image="https://images.unsplash.com/photo-1504270997636-07ddfbd48945"
          imageAlt="Group Classes"
          reverse={true}
          delay={800}
        />

        {/* Enhanced Book a Demo Section */}
        <AnimatedSection delay={1000}>
          <section style={{
            background: 'linear-gradient(135deg, #0A2463 0%, #1e3a8a 100%)',
            borderRadius: '24px',
            padding: '5rem 3rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '4rem'
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              animation: 'float 5s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '120px',
              height: '120px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%',
              animation: 'float 7s ease-in-out infinite reverse'
            }} />
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'white'
              }}>
                Ready to Start Your Chess Journey?
              </h2>
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '3rem',
                maxWidth: '700px',
                margin: '0 auto 3rem auto',
                opacity: '0.95',
                lineHeight: '1.7'
              }}>
                Book your free demo class today and experience our teaching style firsthand. 
                See how we can help you achieve your chess goals with personalized instruction.
              </p>
              
              <a
                href="/book-demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'white',
                  color: '#0A2463',
                  padding: '1.2rem 3rem',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: '2px solid white',
                  transform: 'translateY(0)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                  e.target.style.color = '#0A2463';
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#0A2463';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}
              >
                <span>Book Your Free Demo</span>
                <span style={{ fontSize: '1.4rem' }}>🚀</span>
              </a>
              
              <p style={{
                marginTop: '2rem',
                opacity: '0.8',
                fontSize: '1rem'
              }}>
                No commitment required • 30-minute session • Personalized assessment
              </p>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}