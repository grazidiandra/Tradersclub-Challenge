import React from 'react';
import { Link } from 'react-router-dom';
//Style
import './styles.css';

const Home = ({ listOfCars }) => {
  return (
    <div className='container'>
      <div className='homePage'>
        {listOfCars && listOfCars.map(car => {
          return (
            <Link to={`/carDetail/${car.id}`} key={car.id} style={{ textDecoration: 'none' }}>
              <div key={car.id} className='card'>
                <div className='card__info' >
                  <p className='card__title'>{car.title}</p>
                  <ul className='card__info-detail'>
                    <li>{car.model}</li>
                    <li>{car.brand}</li>
                    <li>{car.km}</li>
                  </ul>
                </div>
                <div className='card__price'>
                  <p className='card__title'>{car.price}</p>
                  <p>{car.year}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home;