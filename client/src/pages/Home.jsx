import React from 'react'
import PostSide from '../components/PostSide/PostSide'
import ProfileSide from '../components/HomeProfileSide/ProfileSide'
import RightSide from '../components/RightSide/RightSide'
import Navbar from '../Navbar'

const Home = () => {
    return (
        <div className='Home px-3 md:px-0 xl:mx-[3rem] relative overflow-hidden h-screen'>
            <div className='grid md:grid-cols-1 xl:grid-cols-[1.4fr_3fr_1.3fr] gap-5 mt-8'>
                <div className='hidden xl:block'>
                    <ProfileSide />
                </div>
                <PostSide />
                <div className='hidden xl:block'>
                    <RightSide />
                </div>
            </div>
        </div>
    )
}

export default Home