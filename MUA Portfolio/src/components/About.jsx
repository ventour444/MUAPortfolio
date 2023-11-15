import React from 'react'
import KTme from '../assets/IMG_406C718AAC87-1.jpeg'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-slate-300 text-gray-900'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
              <div className=' text-4xl font-cold inline'>
                <img className='shadow-xl rounded-full' src={KTme} alt="Logo Image" style={{width: '100%'}} />
              </div>
              <div className='m-8'>
                  <p className='text-2xl font-cold m-8'>International makeup artist Katie Moore specialises in enhancing natural beauty in a creative and playful way.<br></br> <br></br>Her expertise in working to any brief has allowed her to travel the world in collaboration with numerous clients and brands.<br></br> <br></br> Since acquiring a First Class BA Honours Degree in Makeup Artistry, Katie's work has been featured in the likes of Vogue, Elle, GQ and many more.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About