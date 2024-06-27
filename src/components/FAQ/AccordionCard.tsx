import React from 'react'
import './faqStyles.css'

interface AccordionCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  handleClick: () => void;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ title, description, isOpen, handleClick }) => {
  return (
    <div className='accordionContainer'>
      <div className='accordionBox' onClick={() => handleClick()}>
        <span>{title}</span>
        <button className='accordionButton'>{isOpen ? '-': '+'}</button>
      </div>
      {isOpen && <span className='accordionDesc'>{description}</span>}
    </div>
  )
}

export default AccordionCard