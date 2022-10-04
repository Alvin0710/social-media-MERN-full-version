import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { uploadImage } from '../../action/uploadAction';
import { updateUser } from '../../action/userAction';

function ProfileModal({ modalOpened, setModalOpened, data }) {
    const theme = useMantineTheme()

    const { password, ...other } = data
    const [formData, setFormData] = useState(other)
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const param = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            event.target.name === "profileImage"
                ? setProfileImage(img)
                : setCoverImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let UserData = formData

        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }

        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(updateUser(param.id, UserData))
        setModalOpened(false)
    }

    return (
        <Modal
            className='z-[999]'
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='100% md:70% xl:10%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='flex flex-col px-1 md:px-8 pb-[3rem] gap-8'>
                <h3 className='text-center font-bold text-2xl'>Your info</h3>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input
                            type="text"
                            placeholder='First Name'
                            className='infoInput'
                            name='firstname'
                            onChange={handleChange}
                            value={formData.firstname}
                        />
                        <input
                            type="text"
                            placeholder='Last Name'
                            className='infoInput'
                            name='lastname'
                            onChange={handleChange}
                            value={formData.lastname}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder='Work at'
                        className='infoInput'
                        name='worksAt'
                        onChange={handleChange}
                        value={formData.worksAt}
                    />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input
                            type="text"
                            placeholder='Lives in'
                            className='infoInput'
                            name='livesin'
                            onChange={handleChange}
                            value={formData.livesin}
                        />
                        <input
                            type="text"
                            placeholder='Country'
                            className='infoInput'
                            name='country'
                            onChange={handleChange}
                            value={formData.country}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder='Relationship Status'
                        className='infoInput'
                        name='relationship'
                        onChange={handleChange}
                        value={formData.relationship}
                    />

                    <hr className='my-6 w-[70%] mx-auto' />

                    <div className='flex flex-col xl:flex-row gap-6 justify-between mb-4'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-500'>Profile Image</span>
                            <input
                                type="file"
                                name='profileImage'
                                className='cursor-pointer text-gray-600'
                                onChange={onImageChange}
                            />
                        </div>
                        <div className='border-l-[2px]'></div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-500'>Cover Image</span>
                            <input
                                type="file"
                                name='coverImage'
                                className='cursor-pointer text-gray-600'
                                onChange={onImageChange}
                            />
                        </div>
                    </div>
                </div>
                <button className='w-full py-4 button' type='submit' onClick={handleSubmit}>Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal