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
                {/* <svg width="110" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.745.03c-.297-.02-.596-.03-.898-.03C5.752 0 0 5.752 0 12.847s5.752 12.846 12.847 12.846c5.806 0 10.713-3.852 12.304-9.14-.37.087-.755.133-1.15.133h-5.256a5 5 0 0 1-5-5V.031Zm27.204 25.663c7.095 0 12.847-5.751 12.847-12.846S48.044 0 40.949 0 28.102 5.752 28.102 12.847s5.752 12.846 12.847 12.846Zm56.204 0c7.095 0 12.847-5.751 12.847-12.846S104.248 0 97.153 0 84.307 5.752 84.307 12.847s5.751 12.846 12.846 12.846ZM81.898 12.847c0 6.08-4.224 11.174-9.898 12.506V23a5 5 0 0 0-5-5h-9c-.237 0-.47.017-.699.049a12.803 12.803 0 0 1-1.097-5.202C56.204 5.752 61.956 0 69.051 0s12.847 5.752 12.847 12.847Z" fill="currentColor" />
                </svg> */}
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
