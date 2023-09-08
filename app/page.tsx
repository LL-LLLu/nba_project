import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'
import PlayerRank from './components/PlayerRank'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <PlayerRank/>
    </>
  )
}


