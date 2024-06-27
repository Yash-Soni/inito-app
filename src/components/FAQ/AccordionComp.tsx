import React, { useState } from 'react'
import AccordionCard from './AccordionCard.tsx'

const AccordionComp = ({item}) => {
  const [accordionIndex, setAccordionIndex] = useState<number>(-1)
  return (
    <div>
      {item.map((question: any, index: any) => (
        <AccordionCard 
          key={question.id}
          title={question.title} 
          description={question.description} 
          isOpen={index===accordionIndex} 
          handleClick={index === accordionIndex ? () => setAccordionIndex(-1) : () => setAccordionIndex(index)} 
        />
      ))}
    </div>
  )
}

export default AccordionComp