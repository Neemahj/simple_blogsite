import axios from "axios";
import { useEffect, useState } from "react";

const apiUrlComment1 = "https://blogpostapi1.herokuapp.com/comment";
const apiUrlComment2 = "https://blogpostapi1.herokuapp.com/comment/all_comments/";


const Comment = ({ blogPost }) => {
  const [displayComment, setDisplayComment] = useState([]);
  const [comment, setComment] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrlComment1, {
        content: comment,
        post: blogPost.id,
      });
    } catch {
      console.log("Post Error");
    }
    setComment("")
  };


  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          apiUrlComment2 + blogPost.id
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
      {displayComment.map((comment) => {
        return (
          <p className="comment-section" key={comment.id}>
            {comment.content}
          </p>
        );
      })}
      <form>
        <textarea
          col="30"
          rows="5"
          placeholder="Add your comment...."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        <button className="submit-comment" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;
