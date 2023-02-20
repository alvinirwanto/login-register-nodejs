import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import LogoUMBWhite from '../../public/logo-umb-white.png'
// import LogoUMB from '../../public/logo-umb.png'
// import BgLogin from '../../public/background-1.jpg'

import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { ImArrowLeft2 } from 'react-icons/im'

import { logIn } from '../action/AuthAction'

const Login = () => {

    // === Redux ===
    const dispatch = useDispatch()

    const loading = useSelector((state) => state.authReducer.loading)

    // For eye icon in password field
    const [visiblePass, setVisiblePass] = useState(true)

    // For save the data
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    // For get the data
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        // Send the data to be proceed by backend using Dispatch from Redux
        dispatch(logIn(data))
    }

    const user = useSelector((state) => state.authReducer.authData)

    return (
        <div className='bg-gray-300 w-full h-screen flex items-center justify-center'>

            <a
                href='/'
                className='flex justify-center items-center gap-3 absolute top-5 left-10 group cursor-pointer'>
                <div className='bg-primary-blue border-2 border-primary-blue p-3 rounded-full flex justify-center items-center group-hover:bg-transparent duration-300'>
                    <ImArrowLeft2 className='text-white text-lg group-hover:text-primary-blue active:text-primary-blue' />
                </div>
                <p className='text-primary-blue font-medium opacity-0 group-hover:opacity-100 duration-300'>Back to Home</p>
            </a>

            <div className='bg-white shadow-xl rounded-md w-full max-w-[380px] md:max-w-[740px] xl:max-w-[900px] md:h-[60%] xl:h-[70%] mx-auto overflow-clip'>
                <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] xl:grid-cols-2 md:gap-4 h-full'>

                    <div className='relative'>
                        <img
                            src='/background-2.jpg'
                            className='w-full h-full object-cover absolute'
                            alt='login background'
                        />

                        <div className='hidden py-8 px-6 xl:p-[3rem] md:flex flex-col justify-between bg-gradient-to-t from-primary-blue to-[#00000048] absolute z-[100] h-full w-full'>
                            <div className='flex justify-start xl:-mb-9'>
                                <img
                                    src="/LogoUMB/logo-umb-white.png"
                                    className='h-[6rem] w-[6rem]'
                                    alt="logo umb"
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-5xl xl:text-7xl font-bold break-words text-white'>Hello.</h1>
                                <p className='text-base text-white'>Login untuk melihat informasi lebih lanjut mengenai Data Universitas Mercu Buana</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-8 py-[3rem] md:p-[3rem] flex flex-col justify-center gap-[3rem]'>
                        <div className='flex justify-center md:hidden'>
                            <img
                                src='/LogoUMB/logo-umb.png'
                                className='h-[8rem] w-[8rem]'
                                alt="logo umb"
                            />
                        </div>
                        <h1 className='font-bold text-gray-600 text-4xl'>Login</h1>
                        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='Email'
                                name='email'
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

                            <button className='button-primary mt-8 md:mt-0' type='submit' disabled={loading} >
                                {loading ? "loading ... " : "Login"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login