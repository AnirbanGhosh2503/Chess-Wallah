import React, { useEffect, useState } from "react";
import { Star, Award, Users, BookOpen, Calendar, ArrowRight } from "lucide-react";

// Import your actual student images
import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";
import student4 from "../assets/student4.png";
import student5 from "../assets/student5.png";
import student6 from "../assets/student6.png";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('students');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const happyStudents = [
    { img: student1, name: "John Doe", testimonial: "Chess Academy transformed my strategic thinking!", rating: 5, course: "Advanced Chess" },
    { img: student2, name: "Jane Smith", testimonial: "I love the interactive lessons and supportive community.", rating: 5, course: "Beginner Chess" },
    { img: student3, name: "Sam Wilson", testimonial: "Best decision I made for my chess journey!", rating: 5, course: "Tournament Prep" },
  ];

  const achievers = [
    { img: student4, name: "Priya Sharma", award: "National Chess Champion", year: "2024", level: "Expert", achievement: "Won 15 consecutive matches" },
    { img: student5, name: "Rahul Verma", award: "International Youth Champion", year: "2024", level: "Master", achievement: "Youngest player to reach Master level" },
    { img: student6, name: "Ananya Das", award: "Regional Tournament Winner", year: "2023", level: "Advanced", achievement: "Undefeated in regional competitions" },
  ];

  const stats = [
    { number: "500+", label: "Happy Students", icon: Users },
    { number: "50+", label: "Chess Masters", icon: Award },
    { number: "1000+", label: "Lessons Taught", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: Star }
  ];

  return (
    <div style={{
      backgroundColor: '#F8F8F8',
      minHeight: '100vh',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A2463 0%, #1e3a8a 100%)',
        color: 'white',
        padding: '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Chess Pieces Animation */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '3rem',
          opacity: '0.1',
          animation: 'float 8s ease-in-out infinite'
        }}>♔</div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          fontSize: '2.5rem',
          opacity: '0.1',
          animation: 'float 6s ease-in-out infinite reverse'
        }}>♕</div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '15%',
          fontSize: '2rem',
          opacity: '0.1',
          animation: 'float 7s ease-in-out infinite'
        }}>♖</div>
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '20%',
          fontSize: '1.5rem',
          opacity: '0.1',
          animation: 'float 9s ease-in-out infinite reverse'
        }}>♗</div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#FFC300',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease-out'
          }}>
            Our Chess Champions
          </h1>
          <p style={{
            fontSize: '1.4rem',
            marginBottom: '3rem',
            opacity: '0.9',
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.3s'
          }}>
            Meet the brilliant minds who've mastered the game of chess with us. Their success stories inspire our teaching methods.
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.6s'
          }}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} style={{
                  textAlign: 'center',
                  animation: `fadeInUp 1s ease-out ${0.8 + index * 0.2}s both`
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 195, 0, 0.2)',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    border: '3px solid #FFC300'
                  }}>
                    <IconComponent size={32} color="#FFC300" />
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FFC300' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '1rem', opacity: '0.8' }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>

      {/* Tab Navigation */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {[
            { id: 'students', label: 'Happy Students', icon: Users },
            { id: 'achievers', label: 'Our Achievers', icon: Award }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '50px',
                  backgroundColor: activeTab === tab.id ? '#0A2463' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#0A2463',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `2px solid ${activeTab === tab.id ? '#0A2463' : '#0A2463'}`
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.backgroundColor = 'rgba(10, 36, 99, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <IconComponent size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Sections */}
      <div style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Happy Students Section */}
          {activeTab === 'students' && (
            <div style={{
              opacity: activeTab === 'students' ? 1 : 0,
              transform: activeTab === 'students' ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease'
            }}>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#0A2463',
                textAlign: 'center',
                marginBottom: '3rem'
              }}>
                Our Happy Students
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
              }}>
                {happyStudents.map((student, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      padding: '2rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      border: '3px solid #B87333',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 36, 99, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Decorative Corner */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#FFC300',
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                    }} />
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        position: 'relative'
                      }}>
                        <img
                          src={student.img}
                          alt={student.name}
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid #B87333'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: -5,
                          right: -5,
                          backgroundColor: '#FFC300',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Star size={16} fill="#0A2463" color="#0A2463" />
                        </div>
                      </div>
                      
                      <div>
                        <h4 style={{
                          fontSize: '1.4rem',
                          fontWeight: '600',
                          color: '#0A2463',
                          margin: 0
                        }}>
                          {student.name}
                        </h4>
                        <p style={{
                          color: '#B87333',
                          fontWeight: '500',
                          margin: '0.25rem 0 0 0'
                        }}>
                          {student.course}
                        </p>
                        <div style={{ display: 'flex', gap: '2px', marginTop: '0.5rem' }}>
                          {[...Array(student.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="#FFC300" color="#FFC300" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      color: '#2D2D2D',
                      fontStyle: 'italic',
                      margin: 0,
                      padding: '1rem',
                      backgroundColor: 'rgba(184, 115, 51, 0.1)',
                      borderRadius: '10px',
                      borderLeft: '4px solid #B87333'
                    }}>
                      "{student.testimonial}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievers Section */}
          {activeTab === 'achievers' && (
            <div style={{
              opacity: activeTab === 'achievers' ? 1 : 0,
              transform: activeTab === 'achievers' ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease'
            }}>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#0A2463',
                textAlign: 'center',
                marginBottom: '3rem'
              }}>
                Our Achievers
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {achievers.map((achiever, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      padding: '2.5rem',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '2px solid #FFC300',
                      transition: 'all 0.4s ease',
                      animation: `zoomIn 0.6s ease-out ${index * 0.2}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 195, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }}
                  >
                    {/* Achievement Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '20px',
                      backgroundColor: '#B87333',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {achiever.year}
                    </div>
                    
                    {/* Trophy Icon */}
                    <div style={{
                      backgroundColor: '#FFC300',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 2rem',
                      position: 'relative'
                    }}>
                      <Award size={40} color="#0A2463" />
                      <div style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        backgroundColor: '#0A2463',
                        borderRadius: '50%',
                        width: '25px',
                        height: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Star size={12} fill="#FFC300" color="#FFC300" />
                      </div>
                    </div>
                    
                    <div style={{
                      position: 'relative',
                      marginBottom: '1.5rem'
                    }}>
                      <img
                        src={achiever.img}
                        alt={achiever.name}
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '5px solid #0A2463',
                          margin: '0 auto'
                        }}
                      />
                    </div>
                    
                    <h4 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#0A2463',
                      marginBottom: '0.5rem'
                    }}>
                      {achiever.name}
                    </h4>
                    
                    <div style={{
                      backgroundColor: '#B87333',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      display: 'inline-block'
                    }}>
                      {achiever.level}
                    </div>
                    
                    <h5 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#FFC300',
                      marginBottom: '1rem'
                    }}>
                      {achiever.award}
                    </h5>
                    
                    <p style={{
                      color: '#2D2D2D',
                      lineHeight: '1.5',
                      fontSize: '0.95rem'
                    }}>
                      {achiever.achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Book Demo CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #B87333 0%, #8B5A2B 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 195, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 195, 0, 0.1) 0%, transparent 50%)`,
          animation: 'pulse 4s ease-in-out infinite alternate'
        }} />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h3 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#FFC300'
          }}>
            Ready to Join Our Success Stories?
          </h3>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Experience our proven teaching methods with a free demo class. 
            See why our students become champions!
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#FFC300',
              color: '#0A2463',
              border: 'none',
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(255, 195, 0, 0.3)',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(255, 195, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 195, 0, 0.3)';
            }}
            >
              <Calendar size={24} />
              Book Free Demo
              <ArrowRight size={20} />
            </button>
            
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#B87333';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
            >
              <Users size={20} />
              View More Stories
            </button>
          </div>
        </div>

        <style>
          {`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale(0.5);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes pulse {
              0% { opacity: 0.6; }
              100% { opacity: 1; }
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Gallery;