import axios from "axios";
import { useState } from "react";

export const postApiUrl = "https://blogpostapi1.herokuapp.com/"

const NewBlog = () => {
  const [post, setPost] = useState({
    name: "",
    title: "",
    content: "",
  });

  const handlePost = (param) => {
    return ({ target: { value } }) => {
      setPost((previous) => ({
        ...previous,
        [param]: value,
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(postApiUrl, {
        name: post.name,
        title: post.title,
        content: post.content,
      });
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
            name="author"
            value={post.name}
            onChange={handlePost("name")}
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
            onChange={handlePost("title")}
            required
          />
        </label>
      </div>
      <div className="body">
        <label>Body:</label>
        <textarea
          col="30"
          rows="10"
          name="body"
          value={post.content}
          onChange={handlePost("content")}
          required
        ></textarea>
      </div>
      <button className="submit-post">Submit</button>
    </form>
  );
};

export default NewBlog;
