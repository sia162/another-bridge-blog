import React, { useEffect, useState } from 'react';
import Articles from '../../article-home-section/Articles';
import Header from '../../header/Header';
import axios from 'axios';
import { useLocation } from 'react-router';

import '../../../css/edge-line-home.css';
import '../../../css/edge-horiz-line.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts' + search);
        setPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchposts();
  }, [search]);

  return (
    <div>
      <div className="edgelines1">
        <div className="edgelines2">
          <div className="edgelines-h">
            <Header />
            <Articles posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
