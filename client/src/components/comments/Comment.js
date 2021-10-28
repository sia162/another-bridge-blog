import React from 'react';
import './comments.css';

const Comment = () => {
  return (
    <div className="all-comments">
      <div className="comt">
        <div className="commentor-name">Ram</div>
        <div className="commentor-email">ram@gmail.com</div>
        <div className="comment-content">This is such a nice write.</div>
      </div>
    </div>
  );
};

export default Comment;
