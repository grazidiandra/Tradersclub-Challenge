import React from 'react';

import Routes from './Routes';
import Logo from './components/Logo';

const App = () => {
  return(
    <div className='mainStructure'>
      <Logo />
      <Routes/>
    </div>
  )
}

export default App;