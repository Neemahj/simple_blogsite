import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <nav>
        <div className="blog-title">
          <h1>WRITER'S HUB</h1>
        </div>

        <div  className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/new-blog/">New Blog Post</Link>
        </div>
      </nav>
    </header>
  )
};

export default Header;