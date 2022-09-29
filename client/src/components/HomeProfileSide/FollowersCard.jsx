import React from 'react'
import { Followers } from '../../data/FollowersData'

const FollowersCard = () => {
    return (
        <div className='w-full'>
            <h3 className='font-bold text-lg pb-2'>Who is following you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className='flex items-center justify-between py-3'>
                        <span className='hidden'>{id}</span>
                        <div className='flex items-center gap-3'>
                            <img src={follower.img} alt="" className='object-cover rounded-full w-[3.7rem] h-[3.7rem]' />
                            <div className='flex flex-col'>
                                <span className='font-bold'>{follower.name}</span>
                                <span className='text-gray-500 break-all'>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='py-1.5 px-5 mx-1 text-md button'>
                            Follow
                        </button>
                    </div>
                )
            })}

            <div className='flex justify-center items-center my-8 cursor-pointer'>
                <span className='font-bold text-[#ff5851] hover:text-[#ff5751c7]'>
                    Show More
                </span>
            </div>
        </div>
    )
}

export default FollowersCard