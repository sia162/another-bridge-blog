import React from 'react';
import './footer.css';
import '../../css/utils.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>
          Copyright &copy; 2021 All rights reserved | This template is made with
          <i
            className="fa fa-heart"
            style={{ fontSize: '15px', color: 'red' }}
          ></i>{' '}
          by Siya
        </p>
      </div>
    </div>
  );
};

export default Footer;
