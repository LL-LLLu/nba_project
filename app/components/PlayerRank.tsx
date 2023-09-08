'use client'
import React from 'react'
import { Metric, Title, Subtitle, Bold, Italic, Text,Card } from '@tremor/react'
import { useEffect,useState } from 'react'
import useSwr from 'swr';


async function PlayerRank(){

            const currentDate = new Date().toJSON().slice(0, 10);
            const formattedDate = JSON.stringify(currentDate);
            console.log(currentDate)
            async function fetchPlayers() {
            const res = await fetch(`https://www.balldontlie.io/api/v1/stats?start_date=2023-06-10&per_page=100`);
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')}
            return res.json()
            }
            
            const players = await fetchPlayers();
            console.log(players.data[players.data.length-1])
            // const sortedPlayerListByRecency = players.sort((a,b)=>{
            //     if(a.)
            // })
    return (
    <div className='text-center items-center justify-center p-10'>
        <div>
            <div>
                
                <Card className='max-w-xs mx-auto'>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default PlayerRank