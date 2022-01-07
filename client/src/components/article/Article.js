import React from 'react';
import '../article-home-section/articles.css';
import a1 from '../../images/a1.jpg';
// import a8 from '../../images/a8.jpg';
// import a3 from '../../images/a3.jpg';
import a4 from '../../images/a4.jpg';
import { Link } from 'react-router-dom';

const Article = ({ posts }) => {
  return (
    <div>
      <div className="all-articles">
        {/* start */}

        {posts.slice(0, 2).map(post => {
          return (
            <div className="shadows" key={post._id}>
              <div className="article-con">
                {post.picture ? (
                  <img src={post.picture} alt="pic" loading="lazy" />
                ) : (
                  <img src={a4} alt="pic" loading="lazy" />
                )}
                <div className="con">
                  <h4>{post.title}</h4>
                  <p>{post.desc}...</p>
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

        {posts.slice(2, 4).map(post => {
          return (
            <div className="shadow-rev" key={post._id}>
              <div className="article-con article-con-rev">
                {post.picture ? (
                  <img src={post.picture} alt="pic" loading="lazy" />
                ) : (
                  <img src={a1} alt="pic" loading="lazy" />
                )}
                <div className="con">
                  <h4>{post.title}</h4>
                  <p style={{ padding: '0px ', margin: '0px' }}>
                    {post.desc}...
                  </p>
                  <p>By {post.author}</p>
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
        {/* end */}
      </div>
    </div>
  );
};

export default Article;
