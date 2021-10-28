import React, { useEffect, useState } from 'react';
import '../../../css/utils.css';
import Allarticles from '../../all-articles-here/Allarticles';
import axios from 'axios';
import { useLocation } from 'react-router';

import '../../../css/edge-horiz-line.css';

function Allblogpage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts' + search);
        setPosts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchposts();
  }, [search]);

  return (
    <div>
      <div className="edgelines-h">
        <div className="article-section max-width-s m-auto">
          <div className="article-head">everything.</div>

          <Allarticles posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default Allblogpage;
