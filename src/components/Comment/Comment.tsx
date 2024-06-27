import React from 'react'
import './commentStyles.css'

const Comment: React.FC = () => {
  return (
    <div className='comment-container block-header'>
      <div className='comment-box'>
        {/* code to show 5 stars on the comment */}
        {[1,2,3,4,5].map((_, index) => <span key={index} className='stars'>&#9733;</span>)}
        <p className='comment'>This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.</p>
      </div>
      {/* name and Ith active comment */}
      <div className='comment-details'>
        <span>Sunny</span>
        <div>
          {[1,2,3,4].map((_, index) => <span key={index} className={`circle ${index == 0 ? 'active' : ''}`}> </span>)}
        </div>
      </div>


    </div>
  )
}

export default Comment