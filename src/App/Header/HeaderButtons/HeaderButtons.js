import React from 'react'
import fb from './fb.png'
import insta from './insta.png'
import telegram from './telegram.png'


import './headerButtons.css'

const HeaderButtons = () => {
    return (
        <div className="header-buttons">
			<div class="fb">
                <a href="https://www.facebook.com/" target="_blank">
                    <img src={fb} alt="" />
                </a>
            </div>

			<div class="insta">
                <a href="https://www.instagram.com/" target="_blank">
                    <img src={insta} alt="" />
                </a>    
            </div>

            <div class="telegram">
                <a href="https://tlgrm.ru/channels/" target="_blank">
                    <img src={telegram} alt="" />
                </a>            
            </div>
        </div>
    )
}

export default HeaderButtons
