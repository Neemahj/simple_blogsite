import axios from "axios";
import { useEffect, useState } from "react";

const Comment = ({ blogPost }) => {
  const [displayComment, setDisplayComment] = useState([]);
  const [comment, setComment] = useState("");

  const handleClick = async () => {
    try {
      await axios.post("https://blogpostapi1.herokuapp.com/comment", {
        content: comment,
        post: blogPost.id,
      });
    } catch {
      console.log("Post Error");
    }
  };

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          `https://blogpostapi1.herokuapp.com/comment/all_comments/${blogPost.id}`
        );
        setDisplayComment(data.data);
      } catch {
        console.log("FETCH COMMENT ERROR");
      }
    };
    getComment();
  }, [handleClick]);
  return (
    <div className="comment-field">
      {/* <p className="comment-title">COMMENTS</p> */}
      {displayComment.map((comment) => {
        return (
          <p className="comment-section" key={comment.id}>
            {comment.content}
          </p>
        );
      })}
      <textarea
        col="30"
        rows="5"
        placeholder="Add your comment...."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button className="submit-comment" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Comment;
