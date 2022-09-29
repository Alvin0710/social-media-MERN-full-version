import React from 'react'
import Posts from './Posts'
import PostShare from './PostShare'

const PostSide = () => {
    return (
        <div className='flex flex-col gap-4 h-screen overflow-auto pb-[6rem] md:pb-[5rem]'>
            <PostShare />
            <Posts/>
        </div>
    )
}

export default PostSide