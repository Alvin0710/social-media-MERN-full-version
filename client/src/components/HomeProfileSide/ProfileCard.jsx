import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'


const ProfileCard = () => {

    const ProfilePage = true

    return (
        <div className="rounded-lg overflow-clip bg-[color:var(--card-color)] flex flex-col relative gap-4">
            <div className='relative flex flex-col items-center justify-center'>
                <img src={Cover} alt="cover" className='w-full' />
                <img src={Profile} alt="profile" className='w-[6rem] rounded-full absolute bottom-[-3rem] shadow-2xl' />
            </div>

            <div className='flex flex-col items-center mt-[3rem] gap-1 py-4'>
                <span className='font-bold text-xl'>Zendaya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div>
                <hr className='border-gray-100 w-[70%] mx-auto' />
                <div className='flex justify-evenly py-6'>
                    <div className='flex flex-col text-center'>
                        <span className='font-bold text-lg'>6,890</span>
                        <span className='text-gray-500 text-sm'>Followings</span>
                    </div>

                    <div className='flex flex-col text-center'>
                        <span className='font-bold text-lg'>1</span>
                        <span className='text-gray-500 text-sm'>Followers</span>
                    </div>
                    {ProfilePage && (
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-lg'>3</span>
                            <span className='text-gray-500 text-sm'>Posts</span>
                        </div>
                    )}
                </div>

                {ProfilePage ? '' :
                    <>
                        <hr className='border-gray-100 w-[70%] mx-auto' />
                        <div className='flex justify-center items-center my-8 cursor-pointer'>
                            <span className='font-bold text-orange-500 hover:text-orange-400'>
                                My Profile
                            </span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProfileCard