import axios from "axios";
import { useState } from "react";

export const apiUrl = "https://blogpostapi1.herokuapp.com/";

const NewBlog = () => {
  const [post, setPost] = useState({
    name: "",
    title: "",
    content: "",
  });

  const handleChange= (e) => {
    setPost(state => ({...state, [e.target.name]: e.target.value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, post);
    } catch {
      console.log("Post Error");
    }
    setPost({
      name: "",
      title: "",
      content: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>
          Author:
          <input
            type="text"
            name="name"
            value={post.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="field">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="body">
        <label>Body:</label>
        <textarea
          col="30"
          rows="10"
          name="content"
          value={post.content}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className="submit-post">Submit</button>
    </form>
  );
};

export default NewBlog;
