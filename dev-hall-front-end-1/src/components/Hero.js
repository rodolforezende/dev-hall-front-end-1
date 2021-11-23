import React from 'react'
import './styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='description-hero'>
        <span className='span-hero'>Desenvolvedores prontos para ação</span>
        <p className='p-hero'>Seu projeto pronto na velocidade da luz</p>
        <button className='button-hero'>Peça uma reunião</button>
      </div>
    </div>
  )
}

export default Hero;
