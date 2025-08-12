import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p style={{ textAlign: "center", padding: "50px" }}>Loading blog...</p>;

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "auto",
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
      }}>
        
        {/* Back Link */}
        <Link 
          to="/blog" 
          style={{
            display: "inline-block",
            marginBottom: "20px",
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          ← Back to Blogs
        </Link>

        {/* Blog Title */}
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#222"
        }}>
          {blog.title}
        </h1>

        {/* Author Info */}
        <p style={{
          color: "#555",
          marginBottom: "30px",
          fontSize: "0.95rem"
        }}>
          By <strong>{blog.user.name}</strong> • {new Date(blog.published_at).toLocaleDateString()}
        </p>

        {/* Cover Image */}
        <img 
          src={blog.cover_image || "https://via.placeholder.com/800x400"} 
          alt={blog.title} 
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "30px"
          }} 
        />

        {/* Blog Content */}
        <div style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#333"
        }}>
          <ReactMarkdown
            components={{
              h2: ({node, ...props}) => <h2 style={{ marginTop: "30px", fontSize: "1.8rem", color: "#111" }} {...props} />,
              h3: ({node, ...props}) => <h3 style={{ marginTop: "25px", fontSize: "1.5rem", color: "#222" }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: "20px" }} {...props} />,
              a: ({node, ...props}) => <a style={{ color: "#007bff" }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginBottom: "20px", paddingLeft: "20px" }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: "10px" }} {...props} />
            }}
          >
            {blog.body_markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
