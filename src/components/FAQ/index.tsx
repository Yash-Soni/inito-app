import React from 'react'
import { faqData } from '../../data/appData.ts'
import AccordionComp from './AccordionComp.tsx'

const FAQ: React.FC = () => {
  const firstHalf = faqData.slice(0, 4)
  const secondHalf = faqData.slice(4, 8)
  
  return (
    <div className='block-header'>
      <span className='faq-header'>Your top questions, answered</span>
      <div className='faq-questions'>
        <AccordionComp item={firstHalf} />
        <AccordionComp item={secondHalf} />
      </div>
    </div>
  )
}

export default FAQ