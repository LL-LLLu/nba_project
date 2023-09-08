import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <div className='h-[1000px]'>
        <h1 className="text-4xl">Welcome to Next.js!</h1>
        <Image src="/images/nextjs.svg" width={300} height={300} alt='haha'/> 
      </div>
    </>
  )
}


