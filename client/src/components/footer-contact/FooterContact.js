import React from 'react';
import './footercontact.css';
import { Link } from 'react-router-dom';

const FooterContact = () => {
  return (
    <div>
      <div className="below-contact">
        <div className="newsletter">
          <div className="d-news news-head">subscribe to newsletter.</div>
          <div className="d-news news-email">
            <input type="text" name="news-email" placeholder="your email" />
            <button className="btn">subscribe</button>
          </div>
        </div>

        <div className="details-contact">
          <div className="d-con">
            <div className="d-head">author.</div>
            <div className="d-sub">
              <p>Adit Verma</p>
            </div>
          </div>

          <div className="d-con">
            <div className="d-head">address.</div>
            <div className="d-sub">
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>

          <div className="d-con">
            <div className="d-head">phone.</div>
            <div className="d-sub">
              <p>+1 232 3235 324</p>
            </div>
          </div>

          <div className="d-con">
            <div className="d-head">email.</div>
            <div className="d-sub">
              <p>youremail@gmail.com</p>
            </div>
          </div>

          <div className="d-con d-con-icons">
            <div className="d-head">connect.</div>

            <div className="all-icon-box">
              <div className="img d-icon">
                <Link to="#">
                  <i
                    className="fa fa-twitter"
                    style={{ fontSize: '18px', color: 'rgb(255, 255, 255)' }}
                  ></i>
                </Link>
              </div>

              <div className="img d-icon">
                <Link to="#">
                  <i
                    className="fa fa-instagram"
                    style={{ fontSize: '18px', color: 'rgb(255, 255, 255)' }}
                  ></i>
                </Link>
              </div>

              <div className="img d-icon">
                <Link to="#">
                  <i
                    className="fa fa-facebook"
                    style={{ fontSize: '18px', color: 'rgb(255, 255, 255)' }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>

          {/* TODO */}
          <div className="d-con">
            <div className="d-head">only for author.</div>
            <div className="d-sub">
              <Link to="#">
                <p>write</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
