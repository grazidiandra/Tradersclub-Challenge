import React from 'react';
import { Link } from 'react-router-dom';

const LinkPrimary = ({children, to, blue}) => {
  return (
    <Link className={blue ? 'btn-blue' : 'btn-white'} to={to}>{children}</Link>
  )
}

export default LinkPrimary;