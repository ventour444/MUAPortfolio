import React from 'react'
import EmblaCarousel from './Carousel'
import '../css/embla.css'
import Logo from '../assets/KMM1.webp'

const OPTIONS = { align: 'center', containScroll: false, loop: true}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => {
  return (
    
    
    
    <div name='Home' className='w-full h-screen bg-slate-300'>
        <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img className='self-center mb-[50px] ' src={Logo} alt="Logo Image" style={{width: '400px'}} />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    </div>
  )
}

export default Home