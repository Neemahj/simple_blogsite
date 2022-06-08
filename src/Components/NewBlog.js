import axios from "axios";
import { useState } from "react";

const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    title: "",
    content: "",
  });

  const output = (param) => {
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
      await axios.post("https://blogpostapi1.herokuapp.com/", {
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
            onChange={output("name")}
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
            onChange={output("title")}
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
          onChange={output("content")}
        ></textarea>
      </div>
      <button className="submit-post">Submit</button>
    </form>
  );
};

export default CreatePost;
