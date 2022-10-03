import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import Logo from '../../img/logo.png'
import TrendCard from '../RightSide/TrendCard'

const LogoSearch = () => {
    return (
        <div className='mt-8 xl:mt-0 px-3 md:px-0'>
            <div className='flex items-center gap-3 w-full pb-8 xl:pb-0'>
                <a href="/"><img src={Logo} alt="logo" className='w-[35px] h-[30px]' /></a>
                <div className='flex items-center justify-between bg-[#28343e12] rounded-[5px] p-[5px] w-full'>
                    <input type="text" placeholder='#Explore' className='bg-transparent border-none outline-none px-2 w-full' />
                    <div className='flex justify-center mr-2 rounded-[5px] p-[4px] text-white cursor-pointer'>
                        <UilSearch className='text-xl font-bold text-[#ff5851]' />
                    </div>
                </div>
            </div>

            <div className='xl:hidden'>
                <TrendCard />
            </div>
        </div>
    )
}

export default LogoSearch