import React from 'react'
import { Button } from '../Button/Button'
import './HeroSection.scss'

function HeroSection() {
    return (
        <div className='hero-section'>
            <div className="hero-section-container">
                <div className="text-intro-section">
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With overe 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services</p>
                    {/* <button>LEARN MORE</button> */}
                    <Button btnContent='LEARN MORE' />
                </div>
                <div className="hero-img-section">
                    <img src="../assets/home/desktop/image-hero-phone.png" alt="" />
                </div>
                <div className="bg-pattern-wrapper">
                    <img src="../assets/home/desktop/bg-pattern-hero-home.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection