import React from 'react';
import { Link } from 'react-router-dom';
//Style
import './Styles.css';

const SideBar = () => {
  return (
    <div className='logo'>
      <Link to={"/"}><img src='/img/logo-tc.png' alt='logo'/></Link>
    </div>
  )
};

export default SideBar;
