import React from 'react'
import Logo from '../assets/KMM1.webp'
import {Link} from 'react-scroll'

const NavBar = () => {

  return (
    <div className='fixed w-full h-[100px] flex justify-evenly items-center px-4 bg-[#ffffff] text-gray-700'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '200px'}} />
        </div>

        {/* menu */}
            <ul className='flex space-x-10'>
                <li>
                <Link to='Home' smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to='Portfolio' smooth={true} duration={500}>
                Portfolio
                </Link>
                </li>
                <li>
                <Link to='About' smooth={true} duration={500}>
                About Me
                </Link>
                </li>
                <li>
                <Link to='Contact' smooth={true} duration={500}>
                Contact
                </Link>
                </li>
                <li>
                <Link to='Privacy' smooth={true} duration={500}>
                Privacy Policy
                </Link>
                </li>
            </ul>
{/* 
        {/* Mobile Menu
            <div className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Portfolio</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Contact</li>
                <li className='py-6 text-4xl'>Privacy Policy</li>
            </div> */}

            {/* <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li>
                    
                </li>
            </ul>
            </div> */}
    </div>
  )
}

export default NavBar