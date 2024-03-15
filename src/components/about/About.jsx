import React from 'react'
import './About.css'
import {SiHiveBlockchain,SiStrapi,SiFsecure} from "react-icons/si";
import {VscServerProcess} from "react-icons/vsc";
import AboutCard from './AboutCard';


const About = () => {
  return (
    <div className='about'>
      

        <div className="container">
            <h2>A growing protocol Ecosystem</h2>
            <p>The Sci-Fi protocol system empowers developers, liqudity providers, and traders to participate in a financial marketplace thqt is open and accessible to all</p>

            <div className="card-container">
                <div className="card">
                    <AboutCard icon={<SiHiveBlockchain className='icon'/>} heading='Reliable, Tsmper Proof' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti totam sunt,  error  dicta cum?'/>
                </div>
                <div className="card">
                    <AboutCard icon={<SiStrapi className='icon'/>} heading='Seamless connection to any API ' text='Lorem, ipsum dolor sit amet consectetur  elit. Error  veniam. Ratione eligendi nemo,itaque, rem enim dolor voluptates.' />
                </div>
                <div className="card">
                    <AboutCard icon={<SiFsecure className='icon'/>} heading='Proven, ready-made solutions ' text='  Lorem ipsum dolor sit amet consectetur .  delectus. Reprehenderit deleniti recusandae quibusdam dolore quam!' />
                </div>
                <div className="card">
                    <AboutCard icon={<VscServerProcess className='icon'/>} heading='Secure off-chain computaion  ' text='Lorem ipsum dolor sit, amet consectetur  elit. Quaerat temporibus explicabo vitae vel nisi accusamus libero iucimus   aliquid?s fuga?' />
                </div>
             
            </div>
            <a href="/" className="btn">
                use Sci-Fi
            </a>
        </div>

    </div>
  )
}

export default About