import React from 'react'
import './blogStyles.css'

const InitoCard = ({data}) => {
  
  return (
    <div className={`inito-card `}>
      <div id='card-text-content'>
        <p className='title-header-2'>{data.title}</p>
        <p className='blog-content-1'>{data.content}</p>
        <p className='blog-content-1'>{data.body}</p>

      </div>
      <div id='card-image-content'>
        <img src={data.imgSrc} alt='image' className='rounded-image' />
      </div>
    </div>
  )
}

export default InitoCard