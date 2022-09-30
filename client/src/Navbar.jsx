import React from 'react'

import Logo from './img/logo.png'
import ProfileImage from './img/profileImg.jpg'
import { UilEstate } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilChat } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'

const Navbar = () => {
    return (
        <>
            {/* Tablet version */}
            <div className='hidden md:flex md:flex-col md:justify-between md:items-center xl:hidden h-[91.5%] bg-white py-8 px-2 my-8 rounded-md'>
                <div>
                    <a href="/"><img src={Logo} alt="" className='h-[2rem] w-[2.5]' /></a>
                    <div className='flex flex-col justify-between items-center pt-[5rem] gap-[3.5rem]'>
                        <a href="/"><UilEstate className='scale-150 hover:text-[#ff5851]' /></a>
                        <a href="/search-mobile"><UilSearch className='scale-150 hover:text-[#ff5851]' /></a>
                        <a href=""><UilBell className='scale-150 hover:text-[#ff5851]' /></a>
                        <a href=""><UilChat className='scale-150 hover:text-[#ff5851]' /></a>
                        <a href=""><UilSetting className='scale-150 hover:text-[#ff5851]' /></a>
                    </div>
                </div>

                <a href='/profile-mobile'>
                    <img src={ProfileImage} alt="profile" className='rounded-full h-[3rem] object-cover' />
                </a>
            </div>


            {/* Mobile version */}
            <div className='fixed bottom-0 z-[999]'>
                <div className='flex flex-row justify-between items-center w-screen md:hidden bg-white p-4'>
                    <a href="/"><UilEstate className='scale-125' /></a>
                    <a href="/search-mobile"><UilSearch className='scale-125' /></a>
                    <a href=""><UilBell className='scale-125' /></a>
                    <a href=""><UilChat className='scale-125' /></a>
                    <a href=""><UilSetting className='scale-125' /></a>
                    <a href='/profile-mobile'>
                        <img src={ProfileImage} alt="profile" className='rounded-full h-[2.3rem] md:h-[3rem] object-cover' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar