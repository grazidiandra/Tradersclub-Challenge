import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to={"/"}><img src='/img/logo-tc.png' alt='logo'/></Link>
    </div>
  )
};

export default Logo;