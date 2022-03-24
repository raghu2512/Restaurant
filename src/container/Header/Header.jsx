import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to fine dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>This is just some dummy text. you can add some important details here or a catchy subtitle or catchphrase just to make it unique</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
