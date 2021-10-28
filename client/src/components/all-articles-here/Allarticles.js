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
                  <p>{post.desc}...</p>
                  <p style={{ padding: '0px ', margin: '0px' }}>
                    By {post.author}
                  </p>
                  <p>
                    {new Date(post.createdAt).toDateString()}{' '}
                    {new Date(post.createdAt).toLocaleTimeString('en-US')}
                  </p>
                  <Link to="/blog/:id">
                    <button className="btn">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* 

        <div className="shadow-new">
          <div className="all-article-con">
            <img src={a8} alt="" loading="lazy" />
            <div className="con">
              <h4>This is heading</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                ullam dolore minima ipsa sapiente dignissimos reprehenderit
                mollitia, similique iusto nesciunt adipisci! Dolor facilis
                reprehenderit praesentium iusto doloremque corporis iste impedit
                sit odio vel! Dolores illo, laboriosam suscipit quos voluptate
                dolorum excepturi perferendis dignissimos in. Maxime provident
                possimus est ullam aperiam.
              </p>
              <p>7 June | 3min</p>
              <Link to="/blog/:id">
                <button className="btn">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default Allarticles;
