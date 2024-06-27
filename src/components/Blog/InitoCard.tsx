import React from 'react'
import './blogStyles.css'

interface DataProps {
  title: string;
  content: string;
  body: string;
  imgSrc: string;
}

interface InitoCardProps {
  data: DataProps;
  reverse?: boolean;
}

const InitoCard: React.FC<InitoCardProps> = ({data, reverse=false}) => {
  
  return (
    <div className={`inito-card ${reverse ? 'reversed' : ''}`}>
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