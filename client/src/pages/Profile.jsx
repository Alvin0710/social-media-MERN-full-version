import React from 'react'
import PostSide from '../components/PostSide/PostSide'
import ProfileLeft from '../components/ProfileLeftSide/ProfileLeft'
import ProfileCard from '../components/HomeProfileSide/ProfileCard'
import RightSide from '../components/RightSide/RightSide'

const Profile = () => {
    return (
        <div className='relative grid grid-cols-[1.4fr_3fr_1.3fr] gap-5 xl:mx-[3rem] mt-8'>
            <ProfileLeft />

            <div className='overflow-auto h-screen'>
                <div className='flex flex-col gap-4'>
                    <ProfileCard location="profilePage" />
                    <PostSide />
                </div>
            </div>

            <RightSide />
        </div>
    )
}

export default Profile