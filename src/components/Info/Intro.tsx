import React from 'react'
import './infoStyles.css'
import '../Blog/blogStyles.css'

const Intro = () => {
  return (
    <div className='blog-intro'>
      <p className='title-header-1 '>
        The only fertility kit you will ever need
      </p>
      <p>
        Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy: <b>Progesterone.</b>
      </p>

      <p className='sub-header'>
        What makes Inito different?
      </p>
      <p>
        Inito is the only fertility monitor that measures all <b>4 hormones</b> on a <b>single test strip</b>, showing you a full picture of your cycles with results unique to your body.
      </p>
    </div>
  )
}

export default Intro