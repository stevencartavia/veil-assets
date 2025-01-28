"use client"
import React from 'react';
import Button from './Forms/Button';
import { Fade, Zoom } from 'react-awesome-reveal';

const Hero: React.FC = () => {
    return (
        <div className='my-[5em] px-4 md:px-8 lg:px-16'>
            <Zoom>
                <h1 className='text-4xl md:text-5xl lg:text-[5em] text-primary text-center font-bold leading-tight'>
                    Next-Gen Asset Management.
                </h1>
                <p className='text-white text-center text-md md:text-2xl lg:text-2xl mt-4 max-w-4xl mx-auto'>
                    Confidentially manage your digital assets with advanced privacy, secure rebalancing, private yield farming, and seamless cross-chain bridging—all powered by Aztec's cutting-edge technology.
                </p>
            </Zoom>
            <Fade>
                <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-5">
                    <Button label="Get Started" size='lg' />
                    <Button label="Learn More" size='lg' />
                </div>
            </Fade>
        </div>
    );
};

export default Hero;
