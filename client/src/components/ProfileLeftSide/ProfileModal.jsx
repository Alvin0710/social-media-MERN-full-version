import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

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
                        <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
                        <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
                    </div>
                    <input type="text" placeholder='Work at' className='infoInput' name='workat' />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input type="text" placeholder='Lives in' className='infoInput' name='livein' />
                        <input type="text" placeholder='Country' className='infoInput' name='country' />
                    </div>
                    <input type="text" placeholder='Relationship Status' className='infoInput' name='relationship' />

                    <hr className='my-6 w-[70%] mx-auto' />

                    <div className='flex flex-col xl:flex-row gap-6 justify-between mb-4'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-500'>Profile Image</span>
                            <input type="file" name='profileimg' className='cursor-pointer text-gray-600' />
                        </div>
                        <div className='border-l-[2px]'></div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-500'>Cover Image</span>
                            <input type="file" name='coverimg' className='cursor-pointer text-gray-600' />
                        </div>
                    </div>
                </div>
                <button className='w-full py-4 button' type='submit'>Sign Up</button>
            </form>
        </Modal>
    );
}

export default ProfileModal