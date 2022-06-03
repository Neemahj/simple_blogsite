import React from 'react'
import { BlogPosts } from "./Data"

const BlogPage = () => {
  return (
    <div>
      {BlogPosts.map((blogPost) =>{
        return(
          <div className="blog-content">
            <h5 id="p-author">{blogPost.author}</h5>
            <h2 id="p-title">{blogPost.title}</h2>
            <p id="p-body">{blogPost.body}</p>
            <p id="p-comment">{blogPost.comment}</p>

            <button className="submit-comment">Comment</button>
          </div>
        )
      })}
    </div>
  )
};

export default BlogPage
