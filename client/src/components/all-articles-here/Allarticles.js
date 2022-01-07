import React from 'react';
import './allarticles.css';
import a1 from '../../images/a1.jpg';
// import a8 from '../../images/a8.jpg';
import { Link } from 'react-router-dom';

const Allarticles = ({ posts }) => {
  return (
    <div>
      <div className="all-articles-page">
        {posts.map(post => {
          return (
            <div className="shadow-new" key={post._id}>
              <div className="all-article-con">
                {post.picture ? (
                  <img src={post.picture} alt="pic" loading="lazy" />
                ) : (
                  <img src={a1} alt="pic" loading="lazy" />
                )}
                <div className="con">
                  <h4>{post.title}</h4>
                  <p>{post.desc.slice(0, 150)}...</p>
                  <p style={{ padding: '0px ', margin: '0px' }}>
                    By {post.author}
                  </p>
                  <p>
                    {new Date(post.createdAt).toDateString()}{' '}
                    {new Date(post.createdAt).toLocaleTimeString('en-US')}
                  </p>
                  <Link to={`/post/${post._id}`}>
                    <button className="btn">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allarticles;
