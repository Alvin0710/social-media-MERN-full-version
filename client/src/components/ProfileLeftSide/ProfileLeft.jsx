import React from 'react'
import FollowersCard from '../HomeProfileSide/FollowersCard'
import LogoSearch from '../HomeProfileSide/LogoSearch'
import ProfileCard from '../HomeProfileSide/ProfileCard'
import PostSide from '../PostSide/PostSide'
import InfoCard from './InfoCard'

const ProfileLeft = () => {
    return (
        <div className='overflow-auto h-screen pb-8 px-3 md:px-0 xl:py-0 mt-8'>
            <div className='flex flex-col gap-6'>
                <div className='hidden xl:block'>
                    <LogoSearch />
                </div>
                <div className='xl:hidden'>
                    <ProfileCard />
                </div>
                <InfoCard />
                <FollowersCard />
                <div className='xl:hidden'>
                    <PostSide />
                </div>
            </div>
        </div>
    )
}

export default ProfileLeft