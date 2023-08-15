import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    {/* <p>Bitstamp makes trading easy, fast & reliable.</p> */}
                    <h1>Jump start your cryptocurrency portfolio</h1>
                    <p>Cryptotrack is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Get Started</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
