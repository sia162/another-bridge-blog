import React from 'react';
import './about.css';
import '../../../css/utils.css';
import '../../../css/edge-horiz-line.css';
import profileImg from '../../../images/profile.jpg';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div class="edgelines-h">
        <div class="about-section max-width-s m-auto">
          <div class="about-head">about alesa.</div>

          <div class="about-box ">
            <div class="profile">
              <img src={profileImg} alt="" class="imageprofile" />

              <Link to="/contact">
                <div class="overlay">
                  <div class="text">connect with her.</div>
                </div>
              </Link>
            </div>

            <div class="about-con about-box-item">
              <strong>hi! i'm alesa.</strong> i like to cook, write, play music,
              and take photos. i recently moved from brooklyn to a farm on the
              north dakota-minnesota border, where my husband is a
              fifth-generation farmer. the farm life is pretty swell: i get to
              bake all day with wheat from our fields, hang out with my little
              flock of chickens, and hunker down for some very extreme (but
              cozy!) winters. <br />
              <br />
              i graduated from juilliard with a degree in percussion but during
              my time in new york, i fell wildly in love with food. i currently
              spend most of my time playing with food but still play music
              occasionally! <br />
              <br />
              i've documented my life in journals since the day i could write,
              and since 2009, this blog has been an extension of that. most of
              my posts include recipes inspired by my jewish and asian roots and
              my new midwestern surroundings, bits about life around the farm,
              or tales from adventures near and far.
              <br />
              <br />
              <i> join me in my adventure?</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
