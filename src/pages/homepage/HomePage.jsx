import React from 'react';
import Directory from '../../components/directory/Directory';

import './homepage.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
)

export default HomePage;