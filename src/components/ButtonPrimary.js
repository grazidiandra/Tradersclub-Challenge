import React from 'react';

const ButtonPrimary = ({title, onClick, blue, type}) => {
  return (
    <button className={blue ? 'btn__blue' : 'btn__white'} type={type} onClick={onClick}>{title}</button>
  )
}

export default ButtonPrimary;