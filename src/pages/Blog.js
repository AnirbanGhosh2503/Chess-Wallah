import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetch("https://dev.to/api/articles?tag=chess")
      .then((res) => res.json())
      .then((data) => {
        const allPosts = data.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.description || "No description available...",
          image: post.social_image || "",
          url: post.url,
        }));

        setBlogs(allPosts);
        setPopularBlogs(allPosts.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Filter blogs based on search
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculation
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{
      backgroundColor: '#F8F8F8',
      minHeight: '100vh',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0A2463 0%, #1e3a8a 100%)',
        color: 'white',
        padding: '5rem 1rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Latest Chess Insights & Tutorials
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Dive into our expert chess blogs and sharpen your skills.
          </p>
          
          {/* Enhanced Search Bar */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              transform: 'translateY(-50%)',
              zIndex: 3,
              color: '#0A2463'
            }}>
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3.5rem',
                fontSize: '1.1rem',
                border: 'none',
                borderRadius: '50px',
                backgroundColor: 'white',
                color: '#2D2D2D',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
              }}
              onBlur={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            />
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-15px) rotate(3deg); }
            }
          `}
        </style>
      </section>

      <div className="container" style={{ padding: '4rem 1rem' }}>
        <div className="row">
          {/* Left Column - Blog Posts */}
          <div className="col-md-8">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '3rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #0A2463',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 1rem'
                }} />
                <p style={{ color: '#2D2D2D', fontSize: '1.1rem' }}>Loading articles...</p>
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </div>
            ) : currentBlogs.length > 0 ? (
              currentBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                    marginBottom: '2rem',
                    overflow: 'hidden',
                    border: '1px solid rgba(10, 36, 99, 0.1)',
                    transition: 'all 0.3s ease',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 36, 99, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', padding: '2rem' }}>
                    {blog.image && (
                      <div style={{
                        flexShrink: 0,
                        width: '160px',
                        height: '120px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={blog.image}
                          alt={blog.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                      </div>
                    )}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h4 style={{
                          color: '#0A2463',
                          fontSize: '1.4rem',
                          fontWeight: '600',
                          marginBottom: '0.8rem',
                          lineHeight: '1.3'
                        }}>
                          {blog.title}
                        </h4>
                        <p style={{
                          color: '#2D2D2D',
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          marginBottom: '1.5rem',
                          opacity: '0.8'
                        }}>
                          {blog.text}
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/blog/${blog.id}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#0A2463',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            border: '2px solid #0A2463'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#0A2463';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#0A2463';
                            e.target.style.color = 'white';
                          }}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
              }}>
                <p style={{
                  color: '#2D2D2D',
                  fontSize: '1.2rem',
                  fontStyle: 'italic'
                }}>
                  No blogs found matching your search.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav style={{ marginTop: '3rem' }}>
                <ul style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      onClick={() => paginate(index + 1)}
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: currentPage === index + 1 ? '#0A2463' : 'white',
                        color: currentPage === index + 1 ? 'white' : '#0A2463',
                        border: '2px solid #0A2463',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        minWidth: '45px',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => {
                        if (currentPage !== index + 1) {
                          e.target.style.backgroundColor = '#0A2463';
                          e.target.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== index + 1) {
                          e.target.style.backgroundColor = 'white';
                          e.target.style.color = '#0A2463';
                        }
                      }}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <style>
              {`
                @keyframes fadeInUp {
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}
            </style>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-md-4">
            {/* Follow Us Widget */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              border: '1px solid rgba(10, 36, 99, 0.1)'
            }}>
              <h4 style={{
                color: '#0A2463',
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                borderBottom: '2px solid #0A2463',
                paddingBottom: '0.5rem'
              }}>
                Follow Us
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      color: '#2D2D2D',
                      textDecoration: 'none',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#F8F8F8',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#0A2463';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#F8F8F8';
                      e.target.style.color = '#2D2D2D';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Most Popular Widget */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              border: '1px solid rgba(10, 36, 99, 0.1)'
            }}>
              <h4 style={{
                color: '#0A2463',
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                borderBottom: '2px solid #0A2463',
                paddingBottom: '0.5rem'
              }}>
                Most Popular
              </h4>
              {popularBlogs.map((pop, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#F8F8F8',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 36, 99, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8F8F8';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {pop.image && (
                    <img
                      src={pop.image}
                      alt={pop.title}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        flexShrink: 0
                      }}
                    />
                  )}
                  <span style={{
                    color: '#2D2D2D',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    lineHeight: '1.4'
                  }}>
                    {pop.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags Widget */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              border: '1px solid rgba(10, 36, 99, 0.1)'
            }}>
              <h4 style={{
                color: '#0A2463',
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                borderBottom: '2px solid #0A2463',
                paddingBottom: '0.5rem'
              }}>
                Popular Tags
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {['Openings', 'Endgames', 'Chess Tips', 'Strategy', 'Tactics'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: '#0A2463',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '2px solid #0A2463'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#0A2463';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#0A2463';
                      e.target.style.color = 'white';
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;