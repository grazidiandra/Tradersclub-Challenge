import React, { Component } from 'react'
import api from '../service/api';
import { Redirect } from "react-router-dom";

class NewCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      model: '',
      brand: '', 
      year: '', 
      color: '', 
      km: '', 
      price: '',
      post: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    let {title, model, brand, year, color, km, price } = this.state;

    api.post('/cars', { 
      title, model, brand, year, color, km, price
    }).then(() => {
      this.setState({
        title: '',
        model: '',
        brand: '', 
        year: '', 
        color: '', 
        km: '' , 
        price: '',
        post: true
    });
    })
    .catch(error => {
      console.log(error)
    });

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {title, model, brand, year, color, km, price, post } = this.state;

    return (
      <div>
        <form className='container-form' onSubmit={this.handleFormSubmit}>
          <input placeholder='Carro' type='text' name='title' value={title} onChange={e => this.handleChange(e)} required/> 
          <input placeholder='Modelo' type='text' name='model' value={model} onChange={e => this.handleChange(e)} required/> 
          <input placeholder='Marca' type='text' name='brand' value={brand} onChange={e => this.handleChange(e)} required/> 
          <input placeholder='Ano' type='number' name='year' value={year} onChange={e => this.handleChange(e)} required/> 
          <input placeholder='Cor' type='text' name='color' value={color} onChange={e => this.handleChange(e)} required/> 
          <input placeholder='Km' type='number' name='km' value={km} onChange={e => this.handleChange(e)} required/> 
          <input placeholder='Preço' type='number' name='price' value={price} onChange={e => this.handleChange(e)} required/>
          <button type="submit">Salvar</button>
        </form>
        <p>{post ? <Redirect to='/'/> : ''}</p> 
      </div>
    )
  }
}

export default NewCar;