import React from 'react';
import './contact.css';

import '../../../css/edge-horiz-line.css';
import '../../../css/utils.css';

const Contact = () => {
  return (
    <div>
      <div className="edgelines-h">
        <div className="contact-section max-width-s m-auto">
          <div className="contact-head">tell me what you think.</div>

          <div className="line2 max-width-s m-auto"></div>

          <div className="contact-con">
            <p>
              i would be so happy to hear from you. pack some love and warmth in
              an email and send it across.
              <br />
              <br />
              lots of love,
              <br />
              alesa.
            </p>
          </div>

          <div className="contact-form">
            name.
            <div className="c-box">
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
            email.
            <div className="c-box">
              <input type="text" name="email" placeholder="Enter your email" />
            </div>
            phone.
            <div className="c-box">
              <input type="phone" name="phone" placeholder="Enter your phone" />
            </div>
            thoughts.
            <div className="c-box">
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="10"
                placeholder="Enter your thoughts"
              ></textarea>
            </div>
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
