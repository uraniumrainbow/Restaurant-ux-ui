import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className="headtext__cormorant">What we Believe In</h1>

      <div className="app_chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </div>
        <p className="p__opensans">do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Eget mi proin sed libero enim sed. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
