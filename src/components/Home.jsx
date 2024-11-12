import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroComponent from './HeroComponent';

export default function Home() {
    return (
        <div > 
            <Navbar/>
            <HeroComponent/>
        </div>
    )
}