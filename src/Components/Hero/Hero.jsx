import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow-right.png'

const Hero = () => {
  return (
    <div className='hero container'>
          <div className='hero-text'>
              <h1>Welcome to Ignito 2024!</h1>
              <p>Sparking Innovation, Igniting Minds</p>
              <button className='btn'>EXPLORE MORE<img src={arrow} ></img></button>
      </div>
    </div >
  )
}

export default Hero
