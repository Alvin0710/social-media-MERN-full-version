import React, { useState } from 'react'
import { UilEditAlt } from '@iconscout/react-unicons'
import { UilEnvelopeHeart } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'
import ProfileModal from './ProfileModal'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className='flex flex-col gap-3 bg-[color:var(--card-color)] py-9 px-7 rounded-md'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>Your Info</h4>
                <div className='cursor-pointer'>
                    <UilEditAlt onClick={() => setModalOpened(true)} />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened} />
                </div>
            </div>

            <div className='py-4 flex flex-col gap-3'>
                <div className='info'>
                    <UilEnvelopeHeart />
                    <span>Status <span className='font-bold'>in Relationship</span></span>
                </div>

                <div className='info'>
                    <UilEstate />
                    <span>Lives in <span className='font-bold'>Tangerang</span></span>
                </div>

                <div className='info'>
                    <UilBag />
                    <span>Works at <span className='font-bold break-words'>PT Max Solution Indonesia</span></span>
                </div>
            </div>

            <button className='button py-4 mt-6'>Logout</button>
        </div>
    )
}

export default InfoCard