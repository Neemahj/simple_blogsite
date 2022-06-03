import React from 'react'
import { BlogPosts } from "./Data"

const BlogPage = () => {
  return (
    <div>
      {BlogPosts.map((blogPost) =>{
        return(
          <div className="blog-content">
            <p className="p-author">{blogPost.author}</p>
            <p className="p-title">{blogPost.title}</p>
            <p className="p-body">{blogPost.body}</p>
            <p className="p-comment">{blogPost.comment}</p>

            <button className="submit-comment">Comment</button>
          </div>
        )
      })}
    </div>
  )
};

export default BlogPage
