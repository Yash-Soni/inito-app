import React from 'react'
import Comment from './Comment.tsx'
import InitoInfoPage from './InitoInfoPage.tsx'
import './blogStyles.css'

const Blog = () => {
  return (
    <div className='blog-page'>
      <div className='blog-content'>
        <InitoInfoPage />
        <Comment />
      </div>
    </div>
  )
}

export default Blog