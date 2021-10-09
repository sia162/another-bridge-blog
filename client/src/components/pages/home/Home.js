import React from 'react';
import Articles from '../../article-home-section/Articles';
import Header from '../../header/Header';

import '../../../css/edge-line-home.css';
import '../../../css/edge-horiz-line.css';

const Home = () => {
  return (
    <div>
      <div className="edgelines1">
        <div className="edgelines2">
          <div className="edgelines-h">
            <Header />
            <Articles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
