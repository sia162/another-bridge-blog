import React from 'react';
import './allarticles.css';
import a1 from '../../images/a1.jpg';
import a8 from '../../images/a8.jpg';

const Allarticles = () => {
  return (
    <div>
      <div className="all-articles-page">
        {/* start */}

        <div className="shadow">
          <div className="all-article-con">
            <img src={a1} alt="" loading="lazy" />
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
              <a href="/blogpost.html">
                <button className="btn">Read More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="shadow">
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
              <a href="/blogpost.html">
                <button className="btn">Read More</button>
              </a>
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default Allarticles;
