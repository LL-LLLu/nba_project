'use client'
import React from 'react'
import {useRef, useState, useEffect} from 'react'
import nba_logo from '../../public/images/nba_logo_white.png'
import Image from 'next/image'




const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
  return (
    <header className={`header sticky top-0 ${scrolled ? "is-sticky" : ""}`}>
        <div className="header__inner">
            <div className="logo">
                <Image src={nba_logo} alt='nba_logo' className='w-[120px] h-[50px]'/>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Our Works</a></li>
                    <li><a href="#">Our Teams</a></li>
                    <li><a href="#">Our Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

  )
}

export default Header
