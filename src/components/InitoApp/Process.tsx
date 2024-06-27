import React from 'react'

const Process = ({step}) => {
  console.log(step);
  
  return (
    <div id={`process-step-${step.id}`}>
      <img src={step.imgSrc} alt='image' />
      <div className='process-content'>
        <p className='step-num'>{step.id}</p>
        <span className='text-content'>{step.content}</span>
      </div>
    </div>
  )
}

export default Process