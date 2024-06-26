import React from 'react'
import './contactStyles.css'
import instagram from '../../logos/insta.svg'
import facebook from '../../logos/facebook.svg'
import linkedin from '../../logos/linkedin.svg'
import youtube from '../../logos/youtube.svg'


const Contact = () => {
  return (
    <div className='contact-comp'>
      <div className='contact-container'>
        <div className='contact-group' id='body-1'>
          <p className='contact-head'>Company</p>
          <div className='contact-body'>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className='contact-group' id='body-2'>
          <p className='contact-head'>Support</p>
          <div className='contact-body'>
            <p>FAQ</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Returns & Warranty</p>
          </div>
        </div>
        <div className='contact-group' id='body-3'>
          <p className='contact-head'>Get in Touch</p>
          <div className='contact-body'>
            <p>+1 815-369-0989</p>
            <p>help@inito.com</p>
            <p>355 Bryant Street, Suite 403, San Francisco 94017</p>
          </div>
        </div>
        <div className='contact-group' id='body-4'>
          {/* all social media icons here */}
          <img src={facebook} alt='facebook' />
          <img src={instagram} alt='instagram' />
          <img src={linkedin} alt='linkedin' />
          <img src={youtube} alt='youtube' />
          
        </div>
      </div>
    </div>
  )
}

export default Contact