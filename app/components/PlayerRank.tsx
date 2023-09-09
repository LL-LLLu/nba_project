
import React from 'react'
import { Metric, Title, Subtitle, Bold, Italic, Text,Card } from '@tremor/react'
import { useEffect,useState } from 'react'
import useSwr from 'swr';
import getBasePath from '@/lib/getBasePath';

// type Player ={
//     data:{
//         ast:number;
//         blk:number;
//         reb:number;
//         pts:number;
//         stl:number;
//         game:{
//             date:String;
//         }
//         player:{
//             id:number;
//             first_name:string;
//             last_name:string;
//             position:string;
//         }
//         teams:{
//             id:number;
//             name:string;
//         }
//         turnover:number;

        
//     };
// };

async function PlayerRank(){

    const res =await fetch(`${getBasePath()}/api/getPlayers`);

    const playersByPts = await res.json();
    const topTenByPts = playersByPts.slice(playersByPts.length-10,playersByPts.length).reverse();
    console.log(topTenByPts)
            
    return (
    <div className='text-center items-center justify-center p-10'>
        <div className='flex flex-row justify-center p-10 items-center space-x-4 space-y-4'>
            <div className='flex flex-col space-y-2'>
                {topTenByPts.map((player:any,idx:any)=>(
                <Card 
                    decoration='top'
                    decorationColor='red'
                    className='max-w-xs mx-auto'>
                    <div>
                        <Title>{player.player.first_name}{" "} {player.player.last_name}</Title>
                        <Text>{player.reb} reb</Text>
                        <Text>{player.ast} ast</Text>
                    </div>
                </Card>
                ))}
            </div>
            <div className='flex flex-col space-y-2'>
                {topTenByPts.map((player:any,idx:any)=>(
                <Card 
                    decoration='top'
                    decorationColor='red'
                    className='max-w-xs mx-auto'>
                    <div>
                        <Title>{player.player.first_name}{" "} {player.player.last_name}</Title>
                        <Text>{player.reb} reb</Text>
                        <Text>{player.ast} ast</Text>
                    </div>
                </Card>
                ))}
            </div>
            <div className='flex flex-col space-y-2'>
                {topTenByPts.map((player:any,idx:any)=>(
                <Card 
                    decoration='top'
                    decorationColor='red'
                    className='max-w-xs mx-auto'>
                    <div>
                        <Title>{player.player.first_name}{" "} {player.player.last_name}</Title>
                        <Text>{player.reb} reb</Text>
                        <Text>{player.ast} ast</Text>
                    </div>
                </Card>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PlayerRank