import React from 'react'
import HeaderIcon from '../logos/header.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={HeaderIcon} alt='footer-icon' />
      <span>Copyright 2023, Inito Inc.</span>
    </div>
  )
}

export default Footer