import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src="/video/background.mp4" autoPlay loop muted />
            <h1>Recipes For You, By You</h1>
            <div className="hero-btns">
                <Button className='btns' ButtonStyle='btn--outline'
                buttonSize='btn--large'>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection