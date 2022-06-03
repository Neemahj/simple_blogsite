import React from 'react';

const CreatePost = () =>{
  return(
    <form>
      <div className="field">
        <label for="author">Author:
          <input type="text" id="author"/>
        </label>
      </div>
      <div className="field">
        <label for="title">Title:
          <input type="text" id="title"/>
        </label>
      </div>
      <div className="body">
        <label for="body">Body:
          <input type="text" id="body"/>
        </label>
      </div>
      <button className="submit-post">Submit</button>
    </form>
  )
};

export default CreatePost;