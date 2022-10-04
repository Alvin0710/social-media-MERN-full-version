import React, { useState, useRef } from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import { useDispatch, useSelector } from 'react-redux'

import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { uploadImage, uploadPost } from '../../action/uploadAction'


const PostShare = () => {
    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const imageRef = useRef()
    const dispatch = useDispatch()
    // To fetch the user
    const { user } = useSelector((state) => state.authReducer.authData)

    const desc = useRef()

    const onImageChange = (e) => {
        // Check if there is a file and the file is in index 0
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]

            //Set the image to the useState
            setImage(img)
        }
    }

    const reset = () => {
        setImage(null)
        desc.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if (image) {
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename
            console.log(newPost)

            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }

    return (
        <div className='flex gap-4 bg-[color:var(--card-color)] z-[99] p-5 rounded-md'>
            <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="profile" className='rounded-full h-[3rem] object-cover' />
            <div className='w-[80%] md:w-full'>
                <div className='flex items-center gap-3 w-full'>
                    <div className='flex items-center justify-between bg-[#28343e12] rounded-[5px] p-[5px] w-full'>
                        <input
                            ref={desc}
                            required
                            type="text" placeholder="What's Happening?" className='bg-transparent border-none outline-none p-2 w-full' />
                    </div>
                </div>
                <div className='hidden md:flex justify-between items-center pt-4'>
                    <div className='flex flex-row gap-1 text-lg cursor-pointer hover:text-[#ff5851]'
                        // When this div click, it will click also the input button below
                        onClick={() => imageRef.current.click()}>
                        <UilScenery />
                        <p>Photo</p>
                    </div>
                    <div className='flex flex-row gap-1 text-lg cursor-pointer hover:text-[#ff5851]'>
                        <UilPlayCircle />
                        <p>Video</p>
                    </div>
                    <div className='flex flex-row gap-1 text-lg cursor-pointer hover:text-[#ff5851]'>
                        <UilLocationPoint />
                        <p>Location</p>
                    </div>
                    <div className='flex flex-row gap-1 text-lg cursor-pointer hover:text-[#ff5851]'>
                        <UilSchedule />
                        <p>Schedule</p>
                    </div>
                    <button
                        className='px-5 py-2 flex items-center button'
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Uploading..." : "Share"}
                    </button>
                    <div className='hidden' >
                        <input
                            type="file"
                            name='myImage'
                            ref={imageRef}
                            onChange={onImageChange} />
                    </div>
                </div>

                {image && (
                    <div className='relative pt-9'>
                        <UilTimes onClick={() => setImage(null)} className='absolute right-4 top-2 cursor-pointer' />
                        <img src={URL.createObjectURL(image)} alt="" className='w-full max-h-[20rem] object-cover rounded-lg' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare