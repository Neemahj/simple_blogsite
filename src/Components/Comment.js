import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "./NewBlog";

const Comment = ({ blogPost }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}comment/`, {
        content,
        post: blogPost.id,
      });
    } catch {
      console.log("Post Error");
    }
    setContent("");
  };

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          `${apiUrl}comment/all_comments/` + blogPost.id
        );
        setComments(data.data);
      } catch {
        console.log("FETCH COMMENT ERROR");
      }
    };
    getComment();
  }, [comments]);
  return (
    <div className="comment-field">
      {comments.map((comment) => {
        return (
          <p className="comment-section" key={comment.id}>
            {comment.content}
          </p>
        );
      })}
      <form onSubmit={handleClick}>
        <textarea
          col="30"
          rows="5"
          placeholder="Add your comment...."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <button className="submit-comment">Submit</button>
      </form>
    </div>
  );
};

export default Comment;
