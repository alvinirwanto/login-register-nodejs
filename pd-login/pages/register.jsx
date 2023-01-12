import React, { useState } from 'react'
import Image from 'next/image'

import LogoUMB from '../public/logo-umb-white.png'
import BgRegister from '../public/background.jpg'

import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'

const Register = () => {

    // For eye icon in password field
    const [visiblePass, setVisiblePass] = useState(true)
    const [visibleCPass, setVisibleCPass] = useState(true)

    return (
        <div className='bg-gray-300 w-full h-screen flex items-center justify-center'>
            <div className='bg-white shadow-xl rounded-md w-full max-w-[380px] md:max-w-[740px] xl:max-w-[1100px] h-[80%] mx-auto overflow-clip'>
                <div className='grid md:grid-cols-2 gap-4 h-full'>

                    <div className='p-[3rem] flex flex-col justify-center gap-[3rem]'>
                        <div className='flex justify-center md:hidden'>
                            <Image
                                src={LogoUMB}
                                className='h-[3.5rem] w-[3.5rem]'
                                alt=""
                            />
                        </div>
                        <h1 className='font-bold text-gray-600 text-4xl'>Register</h1>
                        <form action="" className='flex flex-col gap-8'>
                            <input
                                type="text"
                                placeholder='Username'
                                className='input-form text-base'
                            />

                            <input
                                type="text"
                                placeholder='Email'
                                className='input-form text-base'
                            />

                            <input
                                type="text"
                                placeholder='Role'
                                className='input-form text-base'
                            />

                            <div className='flex items-center w-full'>
                                <input
                                    type={visiblePass ? "password" : "text"}
                                    placeholder='Password'
                                    className='input-form text-base'
                                    name='password'
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
                                    name='cpassword'
                                />
                                <div className='cursor-pointer ml-[-2.5rem] text-xl text-primary-blue' onClick={() => setVisibleCPass((prev) => !prev)}>
                                    {visibleCPass ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>

                        </form>

                        <button className='button-primary'>Register</button>
                    </div>

                    <div className='relative'>
                        <Image
                            src={BgRegister}
                            className='w-full h-full object-cover absolute'
                        />

                        <div className='hidden p-[3rem] md:flex flex-col justify-between bg-gradient-to-t from-primary-blue to-[#00000048] absolute z-[100] h-full w-full'>
                            <div className='flex justify-end xl:-mb-9'>
                                <Image src={LogoUMB} className='h-[6rem] w-[6rem]' alt="" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-7xl font-bold break-words text-white'>Hello Admin.</h1>
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