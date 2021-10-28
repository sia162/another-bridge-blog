import React from 'react';
import './articles.css';
import '../../css/utils.css';
import Article from '../article/Article';

const Articles = ({ posts }) => {
  return (
    <div>
      <div className="article-section max-width-s m-auto">
        <div className="article-head">this has my story.</div>
        <Article posts={posts} />
      </div>
    </div>
  );
};

export default Articles;
