import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl}) => (
  <div className='menu-item' style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className='content'>
      <h1 className='title'>{ title }</h1>
      <span className='subtitle'>Shop Now</span>
    </div>
  </div>
)

export default MenuItem;