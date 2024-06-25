import React, { useState } from 'react'
import AccordionCard from './AccordionCard.tsx'
import { faqData } from '../../data/faqData.ts'
import AccordionComp from './AccordionComp.tsx'

const FAQ = () => {
  const firstHalf = faqData.slice(0, 4)
  const secondHalf = faqData.slice(4, 8)
  
  return (
    <div>
      <span className='faq-header'>Your top questions, answered</span>
      <div className='faq-questions'>
        <AccordionComp item={firstHalf} />
        <AccordionComp item={secondHalf} />
      </div>
    </div>
  )
}

export default FAQ