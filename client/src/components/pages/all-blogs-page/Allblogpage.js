import React from 'react';
import '../../../css/utils.css';
import Allarticles from '../../all-articles-here/Allarticles';

import '../../../css/edge-horiz-line.css';

function Allblogpage() {
  return (
    <div>
      <div className="edgelines-h">
        <div className="article-section max-width-s m-auto">
          <div className="article-head">everything.</div>

          <Allarticles />
        </div>
      </div>
    </div>
  );
}

export default Allblogpage;
