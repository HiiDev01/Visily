import React from 'react';
import '../styles/LandingPage.css';
import LandingNav from './LandingNav';
import illusOne from '../assets/illus1-min.jpg';

const LandingPage = () => {
  return (
    <div className='landingpage'>
      <LandingNav></LandingNav>
      <div className="content">
        <div className="content_txt">
          <h1>Record...<br></br>and share!</h1>
          <p className='paraOne'>
            Easily create stunning videos with our 
            intuitive recording app! Start capturing 
            and sharing your unique vision today and 
            unleash your creativity like never before!
          </p>
          <a href="#">Explore</a>
          <div className="landicon_con">
            <div className="landicon_wrap">
              <div id="landicon1" className='landicon'></div>
              <div id="landicon2" className='landicon'></div>
              <div id="landicon3" className='landicon'></div>
              <div id="landicon4" className='landicon'></div>
            </div>
            <p className='landiconpara'>100k people have joined</p>
          </div>
        </div>
        <div className="content_vid">
          <div className="video_con">
            <video autoPlay loop muted>
              <source src="/landvid.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="vid_content_con">
            <img src={illusOne} alt="illus" className='vid_con_img'/>
            <div className="vid_text_con">
              <h4>hisaac Brown</h4>
              <p>Awesome tools &#128525; &#128525; &#128525;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
