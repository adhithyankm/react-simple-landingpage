import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join our Sci-Fi community </h2>
            <form action="">
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='enter your email' />
                    <button className='btn'>Sign up</button>
                </div>
                <div className="form-container">
                    <input type="checkbox" /> <p>yes I agree to recevie email communication from Sci-Fi</p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Subscribe