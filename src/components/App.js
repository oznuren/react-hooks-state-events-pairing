import video from "../data/video.js";
import React, { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [upvote, setUpvote] = useState(video.upvotes);
  const [downvote, setDownvote] = useState(video.downvotes);
  const [comments, setComments] = useState(false);

  const handleUpvote = () => {
    setUpvote(upvote + 1);
  };
  const handleDownvote = () => {
    setDownvote(downvote - 1);
  };
  const handleComments = () => {
    setComments(!comments);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div key={video.id}>
        <h1>{video.title}</h1>
        <p>
          {video.views} Views | Uploaded{video.createdAt}
        </p>

        <button
          style={{ margin: "3px", padding: "5px" }}
          onClick={handleUpvote}
        >
          {upvote} 👍
        </button>
        <button
          style={{ margin: "3px", padding: "5px" }}
          onClick={handleDownvote}
        >
          {downvote} 👎
        </button>
        <br />
        <button
          style={{ margin: "3px", padding: "5px" }}
          onClick={handleComments}
        >
          {comments ? "Hide Comments" : "Show Comments"}
        </button>
        <hr></hr>

        {comments && (
          <div>
            <p>{video.comments.length} Comments</p>
            <p>
              {video.comments.map((comment) => (
                <div key={comment.id}>
                  <p>
                    <strong>{comment.user}</strong>
                    <br /> {comment.comment}
                  </p>
                </div>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
