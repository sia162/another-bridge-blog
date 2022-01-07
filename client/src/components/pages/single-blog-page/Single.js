import React, { useEffect, useState } from 'react';
import './single.css';
import img1 from '../../../images/a9.jpg';
import { useLocation } from 'react-router';
// import Comment from '../../comments/Comment';

const Single = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const pathtopost = location.pathname.split('/')[2];
  const [post, setPost] = useState([]);

  useEffect(() => {
    // console.log(pathtopost);
    const fetchpost = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/posts/${pathtopost}`
        );
        const reponse = await res.json();
        setPost(reponse);
        // console.log(reponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpost();
  }, [pathtopost]);

  return (
    <div>
      <div className="edgelines-h">
        <div className="blog-box">
          <div
            className="blog-img"
            style={{
              background: `url(${img1})`,
              width: '40%',
              marginTop: '20px',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          ></div>

          <div className="blog-con-box">
            <div className="blogpost-head">{post.title}</div>
            <div className="cont-sign">
              <i>
                <p style={{ padding: '0px ', margin: '0px' }}>
                  by {post.author} on {new Date(post.createdAt).toDateString()}{' '}
                  {new Date(post.createdAt).toLocaleTimeString('en-US')}
                </p>
              </i>
            </div>
            <div className="blog-content">
              <p>{post.desc}</p>
            </div>

            <div className="line2 max-width-s m-auto"></div>

            <div className="comment-box">
              <div className="comment-head">leave your thoughts</div>
              <form className="comment-form-box">
                <input
                  className="comment-email"
                  type="email"
                  placeholder="enter your email."
                />
                <textarea
                  className="comment"
                  name="comment"
                  id="comment"
                  cols="50"
                  rows="2"
                  placeholder="enter your comment"
                ></textarea>
              </form>
              <button className="btn">Comment</button>
            </div>

            {/* <div className="comment-section">
              <Comment />
            </div> */}

            <div className="alsoread">
              <div className="alsoread-head">RELATED POSTS</div>

              <div className="switching-button">
                <div className="switchpost postprev">
                  <div className="switch-head">PREV POST</div>
                  <a href="/blogpost.html">post heading</a>
                </div>
                <div className="switchpost postnext">
                  <div className="switch-head">NEXT POST</div>
                  <a href="/blogpost.html">post heading</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
