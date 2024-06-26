import React from 'react'
import './commentStyles.css'

const Comment = () => {
  return (
    <div className='comment-container'>
      <div className='comment-box'>
        {[1,2,3,4,5].map((_) => <span className='stars'>&#9733;</span>)}
        <p className='comment'>This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.</p>
      </div>
      <span>Sunny</span>
      {[1,2,3,4].map((_) => <span className='circle'></span>)}

    </div>
  )
}

export default Comment