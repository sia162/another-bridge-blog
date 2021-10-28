import React, { useEffect } from 'react';
import './single.css';
import img1 from '../../../images/a9.jpg';
// import Comment from '../../comments/Comment';

const Single = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="edgelines-h">
        <div className="blog-box">
          <div
            className="blog-img"
            style={{
              background: `url(${img1})`,
              width: '40%',
              marginTop: '15px',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          ></div>

          <div className="blog-con-box">
            <div className="blogpost-head">blogpost heading.</div>
            <div className="cont-sign">
              <i>
                <p> by Alesa Clare posted on 23 July 2020</p>
              </i>
            </div>
            <div className="blog-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam quos natus nisi maiores dignissimos sit vitae eaque
                nesciunt ex ipsa ullam sed aut, repudiandae doloremque animi
                modi, distinctio impedit rerum dolore, eius praesentium quam
                officia accusamus magni! Ea illum repudiandae, in voluptatum
                veritatis facere cum incidunt dolores asperiores sit, impedit
                maiores accusantium, voluptate consequatur quo corrupti totam
                sunt quam vel porro reprehenderit dolorem. Tempora deserunt, eos
                repudiandae quos itaque necessitatibus! Natus quos ipsam tempora
                fugit excepturi inventore soluta dignissimos officia ut rerum
                sapiente doloremque, velit, sit a.
              </p>

              <br />
              <p>
                Provident tempora, porro quo officiis nihil eveniet ducimus ea
                doloribus sequi sit impedit, maxime eum alias veritatis!
                Blanditiis accusantium adipisci recusandae totam ipsum tempore
                harum repellendus aliquid. Impedit voluptate nobis nesciunt vero
                laboriosam exercitationem, cumque illum deleniti ratione
                temporibus quidem blanditiis magnam soluta at enim error
                doloribus praesentium omnis rem voluptatem, ad assumenda atque
                vel repudiandae? Itaque porro accusamus aperiam eos vel quaerat
                molestiae et architecto similique magni deserunt expedita
                doloremque eveniet voluptatum assumenda rem sint quasi quos
                impedit earum iusto, illum excepturi! Ratione, porro unde
                obcaecati reprehenderit tempora, quos consequuntur excepturi
                sequi laudantium sapiente minima repudiandae.{' '}
              </p>
              <br />
              <p>
                Repellendus voluptate rem neque nemo explicabo nulla, tenetur
                dolorem distinctio voluptas culpa eligendi eveniet, iusto
                dolores perferendis quo, expedita magnam? Quod explicabo quia
                distinctio ipsa sunt beatae qui eum deleniti quisquam laborum
                dignissimos, repellat hic provident corrupti. Suscipit itaque
                aliquid fugiat magni deserunt veniam alias dolore possimus,
                exercitationem, aspernatur tempore dolores rerum soluta quaerat
                magnam, aperiam labore nam. Voluptate impedit esse iusto
                mollitia, culpa quasi ducimus eos illo. Voluptates saepe magnam
                nihil, non laudantium numquam rem vel nemo dolore provident
                tempore at debitis amet repellendus perferendis eum porro sed
                enim iusto soluta adipisci. Nam obcaecati dolorem optio quidem
                recusandae laborum, repudiandae enim placeat numquam rerum ut.
                Adipisci, numquam dolorem cupiditate amet doloribus illum
                praesentium omnis ipsum? Tenetur obcaecati officiis libero porro
                tempora incidunt veritatis impedit repudiandae, eum quasi
                provident numquam aliquid minima, temporibus quia explicabo
                repellat nisi exercitationem atque ad rem sed.Totam beatae dolor
                repellendus doloribus, iusto ea consequatur possimus, quis at
                dolorum in nesciunt, molestias delectus rerum dolorem distinctio
                veritatis earum.{' '}
              </p>
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
