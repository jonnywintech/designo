import "./Hero.css";
import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrap">
            <div className="hero__container">
                <div className="hero__text"></div>
                <div className="hero__image">
                    <img src="/src/assets/home/desktop/image-hero-phone.png" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero