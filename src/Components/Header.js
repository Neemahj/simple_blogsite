import React from "react";

const Header = () => {
  return(
    <header>
      <nav>
        <div className="blog-title">
          <h1>WRITER'S HUB</h1>
        </div>

        <div  className="nav-items">
          <a href="/">Home</a>
          <a href="/">New Blog Post</a>
          <a href="/">About</a>
        </div>
      </nav>
    </header>
  )
};

export default Header;