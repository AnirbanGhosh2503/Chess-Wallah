import React, { useState, useEffect } from "react";
import "./Blog.css";
import { FaSearch } from "react-icons/fa";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=chess")
      .then((res) => res.json())
      .then((data) => {
        const allPosts = data.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.description || "",
          image: post.social_image || "",
          url: post.url,
        }));

        setBlogs(allPosts);
        setPopularBlogs(allPosts.slice(0, 3));
      })
      .catch(console.error);
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
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Latest Chess Insights & Tutorials</h1>
        <p>Dive into our expert chess blogs and sharpen your skills.</p>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to page 1 on search
            }}
          />
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div key={blog.id} className="blog-card mb-4">
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-thumb"
                    />
                  )}
                  <div className="blog-info">
                    <h4>{blog.title}</h4>
                    <p>{blog.text}</p>
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more-btn"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No blogs found.</p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="pagination-nav">
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            <div className="side-widget mb-4">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
            </div>

            <div className="side-widget mb-4">
              <h4>Most Popular</h4>
              {popularBlogs.map((pop, index) => (
                <div key={index} className="popular-item">
                  {pop.image && <img src={pop.image} alt={pop.title} />}
                  <span>{pop.title}</span>
                </div>
              ))}
            </div>

            <div className="side-widget">
              <h4>Tags</h4>
              <div className="tag-list">
                <span>Openings</span>
                <span>Endgames</span>
                <span>Chess Tips</span>
                <span>Strategy</span>
                <span>Tactics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
