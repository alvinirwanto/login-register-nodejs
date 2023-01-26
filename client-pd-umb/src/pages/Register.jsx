import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
// import LogoUMBWhite from '../public/logo-umb-white.png'
// import LogoUMB from '../public/logo-umb.png'
// import BgRegister from '../public/background.jpg'

import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { signUp } from '../action/AuthAction'

const Register = () => {

    // === Redux ===
    const dispatch = useDispatch()

    // For eye icon in password field
    const [visiblePass, setVisiblePass] = useState(true)
    const [visibleCPass, setVisibleCPass] = useState(true)


    // For save the data
    const [data, setData] = useState({
        username: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: ""
    })

    // For get the data
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // Check the password and the confirm password is same or not
    const [confirmPass, setConfirmPass] = useState(true)

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        // Check the password and the confirm password is same or not
        data.password === data.confirmPassword
            // Send the data to be proceed by backend using Dispatch from Redux
            ? dispatch(signUp(data))
            : setConfirmPass(false)
    }

    return (
        <div className='bg-gray-300 w-full h-screen flex items-center justify-center'>
            <div className='bg-white shadow-xl rounded-md w-full max-w-[380px] md:max-w-[740px] xl:max-w-[1100px] md:h-[70%] xl:h-[80%] mx-auto overflow-clip'>
                <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] xl:grid-cols-2 md:gap-4 h-full'>

                    <div className='px-8 py-[3rem] md:p-[3rem] flex flex-col justify-center gap-[3rem]'>
                        <div className='flex justify-center md:hidden'>
                            <img
                                src='/logo-umb.png'
                                className='h-[8rem] w-[8rem]'
                                alt="logo umb"
                            />
                        </div>
                        <h1 className='font-bold text-gray-600 text-4xl'>Register</h1>
                        <form className='flex flex-col gap-8' onSubmit={handleSubmit} >
                            <input
                                type="text"
                                placeholder='Username'
                                name='username'
                                className='input-form text-base'
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                placeholder='Email'
                                name='email'
                                className='input-form text-base'
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                placeholder='Role'
                                name='role'
                                className='input-form text-base'
                                onChange={handleChange}
                            />

                            <div className='flex items-center w-full'>
                                <input
                                    type={visiblePass ? "password" : "text"}
                                    placeholder='Password'
                                    className='input-form text-base'
                                    name='password'
                                    onChange={handleChange}
                                />
                                <div className='cursor-pointer ml-[-2.5rem] text-xl text-primary-blue' onClick={() => setVisiblePass((prev) => !prev)}>
                                    {visiblePass ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>

                            <div className='flex items-center w-full'>
                                <input
                                    type={visibleCPass ? "password" : "text"}
                                    placeholder='Confirm Password'
                                    className='input-form text-base'
                                    name='confirmPassword'
                                    onChange={handleChange}
                                />
                                <div className='cursor-pointer ml-[-2.5rem] text-xl text-primary-blue' onClick={() => setVisibleCPass((prev) => !prev)}>
                                    {visibleCPass ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                            <span className={confirmPass ? 'hidden' : 'block text-rose-600 text-sm -mt-6'}>
                                * Confirm Password in not same
                            </span>
                            <button className='button-primary mt-8 md:mt-0' type='submit'>Register</button>
                        </form>

                    </div>

                    <div className='relative'>
                        <img
                            src='/background.jpg'
                            className='w-full h-full object-cover absolute'
                            alt='background register'
                        />

                        <div className='hidden py-8 px-6 xl:p-[3rem] md:flex flex-col justify-between bg-gradient-to-t from-primary-blue to-[#00000048] absolute z-[100] h-full w-full'>
                            <div className='flex justify-end xl:-mb-9'>
                                <img src='/logo-umb-white.png'
                                    className='h-[6rem] w-[6rem]'
                                    alt="logo umb"
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-5xl xl:text-7xl font-bold break-words text-white'>Hello Admin.</h1>
                                <p className='text-base text-white'>Tambahkan user baru untuk dapat mengakses Pangkalan Data Universitas Mercu Buana</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register