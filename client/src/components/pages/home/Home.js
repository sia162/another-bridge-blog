import React from 'react';
import Articles from '../../article-home-section/Articles';
import Header from '../../header/Header';

const Home = () => {
  return (
    <div>
      <div class="edgelines1">
        <div class="edgelines2">
          <div class="edgelines-h">
            <Header />
            <Articles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
