import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//Service
import api from '../service/api';
//Components
import LinkPrimary from '../components/Controls/LinkPrimary';
import ButtonPrimary from '../components/Controls/ButtonPrimary';
//Style
import './styles.css';

class CarDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectCar: false,
      messageUpdate: false,
    };

    this.deleteCar = this.deleteCar.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getCar();
  }

  getCar() {
    const { params } = this.props.match;
    api.get(`/cars/${params.id}`)
    .then(response =>{
      const { title, model, brand, year, color, km, price } = response.data
      this.setState({ title, model, brand, year, color, km, price })
    })
    .catch((err)=>{
      console.log(err)
      this.setState({ redirectCar: true })
    })
  }

  deleteCar() {
    const { params } = this.props.match;
    api.delete(`/cars/${params.id}`)
    .then(() =>{
      this.setState({ redirectCar: true })
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
        this.setState({ messageUpdate: true})
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
    const {title, model, brand, year, color, km, price, redirectCar, messageUpdate } = this.state;

    return (
      <div className='container'>
        <div className='homePage'>
          {title && 
            <form className='form'>
              <input type='text' name='title' value={title} onChange={e => this.handleChange(e)} required/> 
              <div className='form__flex'>
                <input type='text' name='model' value={model} onChange={e => this.handleChange(e)} required/> 
                <input type='text' name='year' value={year} onChange={e => this.handleChange(e)} required/> 
              </div>
              <input type='text' name='brand' value={brand} onChange={e => this.handleChange(e)} required/> 
              <div className='form__flex'>
                <input type='text' name='color' value={color} onChange={e => this.handleChange(e)} required/> 
                <input type='text' name='km' value={km} onChange={e => this.handleChange(e)} required/> 
              </div>
              <input type='text' name='price' value={price} onChange={e => this.handleChange(e)} required/>
              <div className='form__control'>
                <span>
                  <ButtonPrimary onClick={this.deleteCar} blue={true} title={'Remover'} />
                  <LinkPrimary to={'/'} blue={true} title={'Cancelar'}/>
                </span>
                {messageUpdate && <p className='message'>Dados atualizados com sucesso!</p>}
                <ButtonPrimary onClick={this.updateCar} title={'Salvar'}/>
              </div>
            </form>
          }
          {redirectCar && <Redirect to='/'/>}
        </div>
      </div>
    )
  }
}

export default CarDetail;
