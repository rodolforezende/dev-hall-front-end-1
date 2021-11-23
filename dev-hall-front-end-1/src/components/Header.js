import React from 'react'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import './styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <span className='logo'>MeuFreela</span>
      <div className='icons'>        
        <span className='in' ><AiFillLinkedin /></span>
        <span className='inst' ><AiOutlineInstagram /></span>
        <span className='twi'><AiOutlineTwitter /></span>
      </div>
    </div>
  )
}

export default Header;