import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import CarDetail from '../views/CarDetail';
import NewCar from '../views/NewCar';

const Routes = ({ listOfCars, search }) => {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home listOfCars={listOfCars} search={search}/>}/>
      <Route exact path='/carDetail/:id' component={CarDetail}/>
      <Route exact path='/newCar' component={NewCar}/>
    </Switch> 
  )
};

export default Routes;
