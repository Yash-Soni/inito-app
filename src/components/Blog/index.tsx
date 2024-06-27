import React from 'react'
import InitoInfoPage from './InitoInfoPage.tsx'
import './blogStyles.css'

const Blog: React.FC = () => {
  return (
    <div className='blog-page'>
      <div className='blog-content'>
        <InitoInfoPage />
      </div>
    </div>
  )
}

export default Blog