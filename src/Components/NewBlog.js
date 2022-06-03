import axios from 'axios';
import React, { useState } from 'react';

const CreatePost = () =>{
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://blogpostapi1.herokuapp.com/", {
      name,
      title,
      content,
      }
    )
  };
  
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label for="author">Author:
          <input type="text" id="author" onChange={(e)=> setName(e.target.value)}/>
        </label>
      </div>
      <div className="field">
        <label for="title">Title:
          <input type="text" id="title" onChange={(e)=> setTitle(e.target.value)}/>
        </label>
      </div>
      <div className="body">
        <label for="body">Body:</label>
        <textarea col="30" rows='10' onChange={(e)=> setContent(e.target.value)}></textarea>
      </div>
      <button  className="submit-post">Submit</button>
    </form>
  )
};

export default CreatePost;