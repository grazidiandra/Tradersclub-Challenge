import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import NewCar from './pages/NewCar';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/carDetail/:id' component={CarDetail}/>
      <Route exact path='/newCar' component={NewCar}/>
    </Switch> 
  );
}

export default Routes;