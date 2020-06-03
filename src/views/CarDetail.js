import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//Service
import api from '../service/api';
//Components
import LinkPrimary from '../components/LinkPrimary';
import ButtonPrimary from '../components/ButtonPrimary';


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
    const {title, model, brand, year, color, km, price, deleteCar, messageUpdate } = this.state;
    
    return (
      <div className='container'>
        <div className='homePage'>
          {title && 
            <form className='form'>
              {messageUpdate && <p className='message'>Dados atualizados com sucesso!</p>}
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
                  {deleteCar && <Redirect to='/'/>}
                  <LinkPrimary to={'/'} blue={true} title={'Cancelar'}/>
                </span>
                <ButtonPrimary onClick={this.updateCar} title={'Salvar'}/>
              </div>
            </form>
          }
        </div>
      </div>
    )
  }
}

export default CarDetail;