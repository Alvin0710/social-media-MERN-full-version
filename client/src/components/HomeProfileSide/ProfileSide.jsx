import React from 'react'
import FollowersCard from './FollowersCard'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'

const ProfileSide = () => {
    return (
        <div className='overflow-auto h-screen pb-9'>
            <div className='ProfileSide flex flex-col gap-y-8 items-center relative'>
                <LogoSearch />
                <ProfileCard location = 'homepage' />
                <FollowersCard />
            </div>
        </div>
    )
}

export default ProfileSide