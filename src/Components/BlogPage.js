import React, { useEffect, useState } from 'react'
import { BlogPosts } from "./Data"
import axios from 'axios'


const BlogPage = () => {
  const [displayBlog, setDisplayBlog] = useState([]);

  useEffect(() => {
    const getPost = async() => {
      const {data} = await axios.get("https://blogpostapi1.herokuapp.com/");
      setDisplayBlog(data.data)
    }
    getPost();
  }, []);
  console.log(displayBlog);
  return (
    <div>
      {displayBlog.map((blogPost) =>{
        return(
          <div className="blog-content">
            <p className="p-author">{blogPost.name}</p>
            <p className="p-title">{blogPost.title}</p>
            <p className="p-body">{blogPost.content}</p>
            {/* <p className="p-comment">{blogPost.comment}</p> */}

            <button className="submit-comment">Comment</button>
          </div>
        )
      })}
    </div>
  )
};

export default BlogPage
