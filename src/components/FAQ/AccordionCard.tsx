import React from 'react'
import './faqStyles.css'

const AccordionCard = ({ title, description, isOpen, handleClick }) => {
  return (
    <div className='accordionContainer'>
      <div onClick={() => handleClick()}>
        <span>{title}</span>
        <button className='accordionButton'>{isOpen ? '-': '+'}</button>
      </div>
      {isOpen && <span className='accordionDesc'>{description}</span>}
    </div>
  )
}

export default AccordionCard