import React, { useState } from 'react'

import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineSend } from 'react-icons/ai'

import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'
import { UilMessage } from '@iconscout/react-unicons'
import { UilCommentDots } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest.js'


const Post = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const [likes, setLikes] = useState(data.likes.length)


    const handleLike = () => {
        likePost(data._id, user._id);
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }

    return (
        <div className='flex flex-col p-4 mb-4 bg-[color:var(--card-color)] rounded-md gap-4'>
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="image" className='w-full max-h-[20rem] object-cover rounded-md' />

            <div className='flex justify-start items-center gap-3 text-[2.15rem]'>
                <div className='cursor-pointer' onClick={handleLike}>
                    {liked
                        ? <div className='pr-1'>
                            <RiHeart3Fill className='text-[#ff5851] cursor-pointer' />
                        </div>

                        : <div className="pr-1">
                            <RiHeart3Line className='cursor-pointer hover:text-[#ff5851]' />
                        </div>
                    }
                </div>
                <div className='px-2'>
                    <UilCommentDots className='scale-[1.35] cursor-pointer hover:text-[#ff5851]' />
                </div>

                <div className='px-2'>
                    <UilMessage className='scale-[1.3] cursor-pointer hover:text-[#ff5851]' />
                </div>
                {/* <img src={Comment} alt="" />
                <img src={Share} alt="" /> */}
            </div>

            <span className='text-gray-400'>{likes} likes</span>

            <div>
                <span className='font-bold'>{data.name}</span>
                <span> {data.desc}</span>
            </div>
        </div >
    )
}

export default Post