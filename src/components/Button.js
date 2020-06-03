import React from 'react';

const Button = ({title, onClick, blue}) => {
  return (
    <button className={blue ? 'btn-blue' : 'btn-white'} onClick={onClick}>{title}</button>
  )
}

export default Button;