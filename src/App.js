import React, { Component} from 'react';
//Service
import api from './service/api';

import Routes from './routes/Routes';
import Logo from './components/Logo';
import Search from './components/Search';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { listOfCars: [] };

    this.getCars = this.getCars.bind(this);
  }

  getCars(event) {
    const { value } = event.target;
    if (value !== '') {
      api.get(`/cars?q=${value}`)
      .then(response => {
        this.setState({listOfCars: response.data});
      })
      .catch(err => {
        console.log(err);
     })
    } else {
      this.setState({listOfCars:[]});
    }
  }

  render() {
    return (
      <main className='mainStructure'>
          <Logo/>
        <div className='content'>
          <Search title='Cadastrar' onChange={e => this.getCars(e)}/>
          <Routes listOfCars={this.state.listOfCars}/>
        </div>
      </main>
    )
  }
}

export default App;