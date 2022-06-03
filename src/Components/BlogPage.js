import React from 'react'
import { BlogPosts } from "./Data"

const BlogPage = () => {
  return (
    <div>
      {BlogPosts.map((blogPost) =>{
        return(
          <div className="blog-content">
            <h5>{blogPost.author}</h5>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.body}</p>
            <p>{blogPost.comment}</p>
          </div>
        )
      })}
    </div>
  )
};

export default BlogPage
