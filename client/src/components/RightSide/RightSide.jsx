import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilChat } from '@iconscout/react-unicons'
import TrendCard from './TrendCard'
import ShareModal from '../ProfileLeftSide/ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className='py-1'>
            <div className='flex justify-between mb-8'>
                <Link to = '../home'>
                    <UilEstate className='scale-125' />
                </Link>
                <UilSetting className='scale-125' />
                <UilBell className='scale-125' />
                <UilChat className='scale-125' />
            </div>

            <TrendCard />

            <button className='h-[3rem] w-full my-8 button' onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
        </div>
    )
}

export default RightSide