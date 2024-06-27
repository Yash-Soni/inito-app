import React from 'react'
import Intro from './Intro.tsx'
import InitoBenefit from './InitoBenefit.tsx'
import './infoStyles.css'

const Info: React.FC = () => {
  return (
    <div className='block-header info-container'>
      <Intro />
      <InitoBenefit />
    </div>
  )
}

export default Info