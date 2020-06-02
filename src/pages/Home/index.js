import React, { Component } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { 
      listOfCars: []
    };
    this.getCars = this.getCars.bind(this);
  }

  getCars(event) {
    const { value } = event.target;
    if(value !== '') {
      api.get(`/cars?q=${value}`)
      .then(response => {
        this.setState({listOfCars: response.data})
      })
      .catch((err)=>{
        console.log(err)
     })
    } else {
      this.setState({listOfCars:[]})
    }
  }

  render() {
    const { listOfCars } = this.state

    return (
      <div>
         <input type='text' placeholder='Pesquise por um veículo' onChange={e => this.getCars(e)}/>
         <Link to={'/newCar'}>Cadastrar</Link>
         {listOfCars.map(car => {
           return (
              <div key={car.id}>
                <Link to={`/carDetail/${car.id}`} key={car.id} style={{ textDecoration: 'none' }}>
                <p>{car.title}</p>
                </Link>
              </div>
           )
         })}
      </div>
    )
  }
}

export default Home;