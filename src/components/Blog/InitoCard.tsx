import React from 'react'
import './blogStyles.css'

const InitoCard = ({title, content, imgSrc}) => {
  
  return (
    <div className={`inito-card `}>
      <div id='card-text-content'>
        <p className='title-header-2'>{title}</p>
        <p className='blog-content-1'>{content}</p>
      </div>
      <div id='card-image-content'>
        <img src={imgSrc} alt='image' className='rounded-image' />
      </div>
    </div>
  )
}

export default InitoCard