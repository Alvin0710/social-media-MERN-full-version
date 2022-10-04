import React from 'react'
import { useSelector } from 'react-redux'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import { Link } from 'react-router-dom'


const ProfileCard = ({ location }) => {

    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const posts = useSelector((state) => state.postReducer.posts)

    return (
        <div className="rounded-lg overflow-clip bg-[color:var(--card-color)] flex flex-col relative gap-4">
            <div className='relative flex flex-col items-center justify-center'>
                <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="cover" className='w-full' />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="profile" className='w-[6rem] rounded-full absolute bottom-[-3rem] shadow-2xl' />
            </div>

            <div className='flex flex-col items-center mt-[3rem] gap-1 pt-4 pb-2'>
                <span className='font-bold text-xl text-[color:var(--text-color)]'>{user.firstname} {user.lastname}</span>
                <span className='text-[color:var(--text-color)]'>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
            </div>

            <div>
                <hr className='border-gray-100 w-[70%] mx-auto' />
                <div className='flex justify-evenly py-8'>
                    <div className='flex flex-col text-center'>
                        <span className='font-bold text-lg text-[color:var(--text-color)]'>{user.following.length}</span>
                        <span className='text-gray-500 text-sm'>Followings</span>
                    </div>

                    <div className='flex flex-col text-center'>
                        <span className='font-bold text-lg text-[color:var(--text-color)]'>{user.followers.length}</span>
                        <span className='text-gray-500 text-sm'>Followers</span>
                    </div>
                    {location === 'profilePage' && (
                        <div className='flex flex-col text-center'>
                            <span className='font-bold text-lg text-[color:var(--text-color)]'>{posts.filter((post) => post.userId === user._id).length}</span>
                            <span className='text-gray-500 text-sm'>Posts</span>
                        </div>
                    )}
                </div>

                {location === 'profilePage' ? '' :
                    <>
                        {/* <hr className='border-gray-100 w-[70%] mx-auto' /> */}
                        <div className='flex justify-center items-center mt-5 mb-9 cursor-pointer'>
                            <span className='font-bold text-[#ff5851] hover:text-[#ff5751d2]'>
                                <Link to={`/profile/${user._id}`} >My Profile</Link>
                            </span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProfileCard