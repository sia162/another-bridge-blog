import React from 'react';
import '../article-home-section/articles.css';
import a1 from '../../images/a1.jpg';
import a8 from '../../images/a8.jpg';
import a3 from '../../images/a3.jpg';
import a4 from '../../images/a4.jpg';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <div>
      <div className="all-articles">
        {/* start */}

        <div className="shadows">
          <div className="article-con">
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
              <Link to="/blog/:id">
                <button className="btn">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="shadows">
          <div className="article-con">
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

        <div className="shadow-rev">
          <div className="article-con article-con-rev">
            <img src={a3} alt="" loading="lazy" />
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

        <div className="shadow-rev">
          <div className="article-con article-con-rev">
            <img src={a4} alt="" loading="lazy" />
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

export default Article;
