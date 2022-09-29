import { Modal, useMantineTheme } from '@mantine/core'
import React from 'react'
import PostShare from '../PostSide/PostShare'

const ShareModal = ({ modalOpened, setModalOpened }) => {
    const theme = useMantineTheme()
    return (
        <Modal
            className='z-[999]'
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='50%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <PostShare />
        </Modal>
    )
}

export default ShareModal