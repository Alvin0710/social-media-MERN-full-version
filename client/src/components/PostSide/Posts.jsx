import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../action/postAction'

import Post from './Post'

const Posts = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)

    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    }, []);

    return (
        <div className='flex flex-col gap-1'>
            {loading
                ? "Fetching Posts..."
                : posts.map((post, id) => {
                    return <Post data={post} key={id} />
                })}
        </div>
    )
}

export default Posts