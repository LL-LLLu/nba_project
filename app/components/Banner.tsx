import React from 'react'
import nba_banner from '../../public/video/nba_banner.mp4'

const Banner = () => {
  return (
    <div className='mt-10 h-[1000px]'>
        <div>
            <div className='relative'>
                <video
                    src={nba_banner}
                    autoPlay
                    loop
                    muted
                    className='object-cover w-full h-[700px]'
                >
                </video>
                <div className='absolute left-[750px] top-[200px] text-center'>
                    <div className='w-[600px] h-[300px] bg-black bg-opacity-30 backdrop-blur-lg text-center pt-[60px]'>
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