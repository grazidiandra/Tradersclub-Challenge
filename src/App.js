import React, { Component} from 'react';
//Service
import api from './service/api';

import Routes from './routes/Routes';
import SideBar from './components/SideBar/';
import Search from './components/Search/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      listOfCars: [],
      search: false
     };

    this.getCars = this.getCars.bind(this);
  }

  getCars(event) {
    const { value } = event.target;
    if (value !== '') {
      api.get(`/cars?q=${value}`)
      .then(response => {
        this.setState({listOfCars: response.data, search: true});
      })
      .catch(err => {
        console.log(err);
     })
    } else {
      this.setState({listOfCars:[], search: false});
    }
  }

  render() {
    const {listOfCars, search} = this.state
    return (
      <main className='mainStructure'>
          <SideBar/>
        <div className='content'>
          <Search title='Cadastrar' onChange={e => this.getCars(e)}/>
          <Routes listOfCars={listOfCars} search={search}/>
        </div>
      </main>
    )
  }
};

export default App;
