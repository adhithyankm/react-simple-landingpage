import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4' />
            </video>
            <div className='hero-text'>
                <h1>Decentralized</h1>
                <h1><span className="blue">Trading</span>Protocol</h1>
                <p>Guarenteed liqudity trading for millions of users and top Ethernium Applictions </p>

                <div className="btn-group">
                    <button className="btn">Use Sci-Fi</button>
                    {/* <button className="btn btn-outline">Documentaition</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>

            </div>
            <div className="bottom-text">
                <h2>Total Volume Secured: $6749257</h2>
            </div>
        </div>
    )
}

export default Hero