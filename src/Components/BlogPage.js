import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import { apiUrl } from "./NewBlog";

const BlogPage = () => {
  const [displayBlog, setDisplayBlog] = useState([]);
  const [currentPost, setCurrentPost] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        setDisplayBlog(data.data);
      } catch {
        console.log("FETCH ERROR");
      }
    };
    getPost();
  }, []);
  console.log(displayBlog);

  const handleClick = (id) => {
    setCurrentPost(id);
  };

  return (
    <div>
      {displayBlog.map((blogPost) => {
        return (
          <div className="blog-content" key={blogPost.id}>
            <p className="p-author">{blogPost.name}</p>
            <p className="p-title">{blogPost.title}</p>
            <p className="p-body">{blogPost.content}</p>

            <button
              className="open-comment"
              onClick={() => handleClick(blogPost.id)}
            >
              Comments
            </button>
            <div
              className={`${
                currentPost === blogPost.id ? "active" : "inactive"
              }`}
            >
              <Comment blogPost={blogPost} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
