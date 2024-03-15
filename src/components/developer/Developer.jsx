import React from 'react'
import './Developer.css'
import terminal from '../../assets/terminal.png'

const Developer = () => {
  return (
    <div className='developers'>
        <div className="container">
            <div className="left">
                <h2>Superpowers for SCi-Fi developers.</h2>
                <p>Checkout the <span className="blue">documentation</span>,the <span className="blue">quick start </span> or a guide below to integrate yourproject with thousands of tokens and billions of liquidity</p>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={terminal} alt="." />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Developer