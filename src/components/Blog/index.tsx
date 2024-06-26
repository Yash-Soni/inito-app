import React from 'react'
import Intro from './Intro.tsx'
import Comment from './Comment.tsx'
import InitoBenefit from './InitoBenefit.tsx'
import InitoInfoPage from './InitoInfoPage.tsx'
import './blogStyles.css'

const Blog = () => {
  return (
    <div className='blog-page'>
      <Intro />
      <InitoBenefit />
      <InitoInfoPage />
      <Comment />
    </div>
  )
}

export default Blog