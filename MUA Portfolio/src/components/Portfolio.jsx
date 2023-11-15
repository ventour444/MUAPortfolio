import React from 'react'
import image1 from '../assets/KTP1.webp'
import image2 from '../assets/KTP2.webp'
import image3 from '../assets/KTP3.webp'
import image4 from '../assets/KTP4.webp'
import image5 from '../assets/KTP5.webp'
import image6 from '../assets/KTP6.webp'


const Portfolio = () => {
  return (
    <div name='Portfolio' className='w-full h-screen bg-slate-300 text-gray-900'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5'>
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
            </div>
        </div>
    </div>
       
    
  )
}

export default Portfolio