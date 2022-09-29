import React from 'react'
import Logo from '../img/logo.png'

const Auth = () => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 h-screen gap-0 xl:gap-8 relative max-w-[1200px] mx-auto'>
            <div className='flex justify-center items-center gap-4'>
                <img src={Logo} alt="logo" className='w-[6rem] h-[5rem]' />
                <div>
                    <h1 className='text-5xl font-extrabold pb-2'>ZKC Media</h1>
                    <p className='text-xl text-gray-500'>Explore the ideas throughout the world</p>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <LogIn />
                {/* <SignUp /> */}
            </div>
        </div>
    )
}

function LogIn() {
    return (
        <div className='bg-[color:var(--card-color)] p-[3.5rem] rounded-md w-[35rem] md:mt-[-25rem] xl:mt-0'>
            <form action="" className='flex flex-col gap-8'>
                <h3 className='text-center py-4 text-3xl text-orange-500 font-bold'>Log In</h3>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='Username' className='infoInput' name='username' />
                    <input type="text" placeholder='Password' className='infoInput' name='password' />
                </div>
                <button className='w-full py-4 button' type='submit'>Log In</button>
                <span className='text-center'>Don't have an account? <a href="" className='text-orange-500 hover:text-orange-400'>Sign Up!</a></span>
            </form>
        </div>
    )
}

function SignUp() {
    return (
        <div className='bg-[color:var(--card-color)] p-[3.5rem] rounded-md w-[35rem]'>
            <form action="" className='flex flex-col gap-8'>
                <h3 className='text-center py-4 text-3xl text-orange-500 font-bold'>Sign Up</h3>
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
                        <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
                    </div>
                    <input type="text" placeholder='Username' className='infoInput' name='username' />
                    <input type="text" placeholder='Password' className='infoInput' name='password' />
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpass' />
                </div>
                <button className='w-full py-4 button' type='submit'>Sign Up</button>
                <span className='text-center'>Already have an account? <a href="" className='text-orange-500 hover:text-orange-400'>Login</a></span>
            </form>
        </div>
    )
}

export default Auth