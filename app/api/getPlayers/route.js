import { NextResponse } from "next/server";


export async function GET(req,res)
{

    const currentDate = new Date().toJSON().slice(0, 10);
    const formattedDate = JSON.stringify(currentDate);
    async function fetchPlayers() {
    const res = await fetch(`https://www.balldontlie.io/api/v1/stats?start_date=2023-06-10&per_page=100`);
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')}
            return res.json()
            }
            
            const players = await fetchPlayers();
            const sortedPlayerListByRecency = players.data.sort((a,b)=>{
                if(a.pts<b.pts)
                return -1;
            });
            
            return NextResponse.json(sortedPlayerListByRecency.reverse());
}
            