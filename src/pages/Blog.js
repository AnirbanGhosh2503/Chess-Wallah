import React, { useState } from "react";
import "./Blog.css";
import { FaSearch } from "react-icons/fa";
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import Blog3 from "../assets/Blog3.png";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogs = [
    {
      id: 1,
      title: "Opening Strategies for Beginners",
      text: "Master the basics of chess openings to control the board from the start.",
      image: Blog1,
    },
    {
      id: 2,
      title: "Endgame Tactics You Must Know",
      text: "Learn how to convert small advantages into victories during the endgame.",
      image: Blog2,
    },
    {
      id: 3,
      title: "How to Avoid Common Blunders",
      text: "Discover practical ways to reduce mistakes and play with confidence.",
      image: Blog3,
    },
  ];

  const popularBlogs = [
    { title: "Magnus Carlsen's Best Games", image: Blog3 },
    { title: "Top 5 Chess Traps", image: Blog1 },
    { title: "Psychology of Chess", image: Blog2 },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog.id} className="blog-card mb-4">
                  <img src={blog.image} alt={blog.title} className="blog-thumb" />
                  <div className="blog-info">
                    <h4>{blog.title}</h4>
                    <p>{blog.text}</p>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No blogs found.</p>
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
                  <img src={pop.image} alt={pop.title} />
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
