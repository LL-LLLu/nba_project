'use client'

import React from 'react'
import nba_banner from '../../public/video/nba_banner.mp4'

const Banner = () => {




  return (
    <div className='mt-10 h-[800px]'>
        <div>
            <div className='relative h-[400px] md:h-[700px]'>
                <video
                    src={nba_banner}
                    autoPlay
                    loop
                    muted
                    className='object-cover w-full h-full'
                >
                </video>
                <div className='invisible md:visible absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <div className=' text-center w-[80%] md:w-[40%] bg-black bg-opacity-30 backdrop-blur-lg p-7'>
                        <h1 className='font-bold uppercase'>
                            Welcome to NBA Stats
                        </h1>
                        <p className='text-gray-300'>a place you can look for daily update of the group of best performer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner