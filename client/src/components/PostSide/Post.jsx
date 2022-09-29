import React from 'react'

import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineSend } from 'react-icons/ai'

import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'
import { UilMessage } from '@iconscout/react-unicons'
import { UilCommentDots } from '@iconscout/react-unicons'


const Post = ({ data }) => {
    return (
        <div className='flex flex-col p-4 mb-4 bg-[color:var(--card-color)] rounded-md gap-4'>
            <img src={data.img} alt="image" className='w-full max-h-[20rem] object-cover rounded-md' />

            <div className='flex justify-start items-center gap-3 text-[2.15rem]'>
                {/* <AiFillHeart /> : <UilHeart className='scale-125' /> */}
                {data.liked
                    ? <div className='pr-1'>
                        <RiHeart3Fill className='text-orange-500' />
                    </div>

                    : <div className="pr-1">
                        <RiHeart3Line />
                    </div>
                }
                {/* <AiOutlineMessage/> */}
                <div className='px-2'>
                    <UilCommentDots className='scale-[1.35]' />
                </div>

                <div className='px-2'>
                    <UilMessage className='scale-[1.3]' />
                </div>
                {/* <img src={Comment} alt="" />
                <img src={Share} alt="" /> */}
            </div>

            <span className='text-gray-400'>{data.likes} likes</span>

            <div>
                <span className='font-bold'>{data.name}</span>
                <span> {data.desc}</span>
            </div>
        </div >
    )
}

export default Post