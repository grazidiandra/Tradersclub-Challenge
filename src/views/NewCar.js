import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
//Service
import api from '../service/api';
//Components
import ButtonPrimary from '../components/Controls/ButtonPrimary';
//Style
import './styles.css';

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
      post: false,
      message: false,
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
      this.setState({message: true})
    });

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {title, model, brand, year, color, km, price, post, message } = this.state;

    return (
      <div className='container'>
        <div className='homePage'>
          <form onSubmit={this.handleFormSubmit} className='form'>
            {message && <p className='message'>Problemas ao salvar o formulário</p>}
            <input placeholder='Carro' type='text' name='title' value={title} onChange={e => this.handleChange(e)} required/> 
            <div  className='form__flex'>
              <input placeholder='Modelo' type='text' name='model' value={model} onChange={e => this.handleChange(e)} required/> 
              <input placeholder='Ano' type='number' name='year' value={year} onChange={e => this.handleChange(e)} required/> 
            </div>
            <input placeholder='Marca' type='text' name='brand' value={brand} onChange={e => this.handleChange(e)} required/> 
            <div  className='form__flex'>
              <input placeholder='Cor' type='text' name='color' value={color} onChange={e => this.handleChange(e)} required/> 
              <input placeholder='Km' type='number' name='km' value={km} onChange={e => this.handleChange(e)} required/> 
            </div>
            <input placeholder='Preço' type='number' name='price' value={price} onChange={e => this.handleChange(e)} required/>
            <div>
              <ButtonPrimary blue={true} type={"submit"} title={'Salvar'}/>
            </div>
          </form>
          {post && <Redirect to='/'/>} 
        </div>
      </div>
    )
  }
}

export default NewCar;