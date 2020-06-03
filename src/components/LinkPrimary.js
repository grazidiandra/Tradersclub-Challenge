import React from 'react';
import { Link } from 'react-router-dom';

const LinkPrimary = ({title, to, blue}) => {
  return (
    <Link className={blue ? 'btn__blue' : 'btn__white'} to={to}>{title}</Link>
  )
}

export default LinkPrimary;