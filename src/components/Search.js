import React from 'react';
import LinkPrimary from './LinkPrimary';

const Search = ({placeholder, onChange, title }) => {
  return(
    <div className='searchBar'>
      <input type='text' placeholder={placeholder} onChange={onChange}/>
      <LinkPrimary to={'/newCar'} title={title}/>
    </div>
  )
};

export default Search;