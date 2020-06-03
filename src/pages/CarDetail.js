import React, { Component } from 'react';
import api from '../service/api';
import { Link, Redirect } from 'react-router-dom';


class CarDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      deleteCar: false,
      messageUpdate: false,
    };
    this.deleteCar = this.deleteCar.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getCar();
  }

  getCar() {
    const { params } = this.props.match;
    api.get(`/cars/${params.id}`)
    .then(response =>{
      const { title, model, brand, year, color, km, price } = response.data
      this.setState({title, model, brand, year, color, km, price})
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  deleteCar() {
    const { params } = this.props.match;
    api.delete(`/cars/${params.id}`)
    .then(response =>{
        this.setState({deleteCar: true})
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  updateCar() {
    const { params } = this.props.match;
    let {title, model, brand, year, color, km, price } = this.state;

    api.put(`/cars/${params.id}`, { 
      title, model, brand, year, color, km, price
    })
    .then(response =>{
      const { title, model, brand, year, color, km, price } = response.data
        this.setState({title, model, brand, year, color, km, price, messageUpdate: true})
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }; 

  render() {
    const {title, model, brand, year, color, km, price, deleteCar } = this.state;

    return (
      <div>
        {title && 
          <div>
          <input type='text' name='title' value={title} onChange={e => this.handleChange(e)} required/> 
          <input type='text' name='model' value={model} onChange={e => this.handleChange(e)} required/> 
          <input type='text' name='brand' value={brand} onChange={e => this.handleChange(e)} required/> 
          <input type='text' name='year' value={year} onChange={e => this.handleChange(e)} required/> 
          <input type='text' name='color' value={color} onChange={e => this.handleChange(e)} required/> 
          <input type='text' name='km' value={km} onChange={e => this.handleChange(e)} required/> 
          <input type='text' name='price' value={price} onChange={e => this.handleChange(e)} required/>
          </div>
        }
        <button onClick={this.deleteCar}>Remover</button>
        <p>{deleteCar ? <Redirect to='/'/> : ''}</p> 
        <Link to={'/'}>Cancelar</Link>
        <button onClick={this.updateCar}>Salvar</button>
      </div>
    )
  }
}

export default CarDetail;