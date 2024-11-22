import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusivee Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated </p>
      <div>
        <input type='text' placeholder='Enter your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
