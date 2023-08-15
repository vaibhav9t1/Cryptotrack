import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Build your Crypto Portfolio with us in just 3 steps.</h2>
                    <br />

                    <p><b>Register: </b> Create an account on a cryptocurrency platform to start investing.</p>
                    <p> <b>Fund:</b> Deposit money into your account to have capital for cryptocurrency trading.</p>
                    <p> <b>Trade</b> Buy and Sell cryptocurrencies on the platform to potentially profit from price fluctuations. </p>

                    <br />
                    <br />

                    {/* <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p> */}
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
