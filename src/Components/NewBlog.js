import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{await axios.post("https://blogpostapi1.herokuapp.com/", {
      name:post.name,
      title:post.title,
      content:post.content
    });
  }catch(e){
    console.log("Post Error")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label for="author">
          Author:
          <input
            type="text"
            id="author"
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
          />
        </label>
      </div>
      <div className="field">
        <label for="title">
          Title:
          <input
            type="text"
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </label>
      </div>
      <div className="body">
        <label for="body">Body:</label>
        <textarea
          col="30"
          rows="10"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        ></textarea>
      </div>
      <button className="submit-post">Submit</button>
    </form>
  );
};

export default CreatePost;
