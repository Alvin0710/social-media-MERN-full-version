import React, { useEffect, useState } from 'react'
import { UilEditAlt } from '@iconscout/react-unicons'
import { UilEnvelopeHeart } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'
import ProfileModal from './ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../action/AuthAction'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)

    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            } else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }

        fetchProfileUser()
    }, [user])

    const handleLogout = () => {
        dispatch(logOut())
    }

    return (
        <div className='flex flex-col gap-3 bg-[color:var(--card-color)] py-9 px-7 rounded-md'>
            <div className='flex justify-between'>
                <h4 className='font-bold text-lg'>Profile Info</h4>

                {user._id === profileUserId ? (
                    <div className='cursor-pointer'>
                        <UilEditAlt onClick={() => setModalOpened(true)} />
                        <ProfileModal
                            modalOpened={modalOpened}
                            setModalOpened={setModalOpened}
                            data={user}
                        />
                    </div>
                ) : ""}

            </div>

            <div className='py-4 flex flex-col gap-3'>
                <div className='info'>
                    <UilEnvelopeHeart />
                    <span>Status <span className='font-bold'>{profileUser.relationship}</span></span>
                </div>

                <div className='info'>
                    <UilEstate />
                    <span>Lives in
                        <span className='font-bold break-words'> {profileUser.livesin}, </span>
                        <span className='font-bold break-words'>{profileUser.country}</span>
                    </span>
                </div>

                <div className='info'>
                    <UilBag />
                    <span>Works at <span className='font-bold break-words'>{profileUser.worksAt}</span></span>
                </div>
            </div>

            <button className='button py-4 mt-6' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard