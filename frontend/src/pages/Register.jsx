import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
// import LogoUMBWhite from '../public/logo-umb-white.png'
// import LogoUMB from '../public/logo-umb.png'
// import BgRegister from '../public/background.jpg'

import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { ImArrowLeft2 } from 'react-icons/im'

import { signUp } from '../action/AuthAction'
import { Navigate } from 'react-router-dom'

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
        // e.preventDefault()

        // Check the password and the confirm password is same or not
        data.password === data.confirmPassword
            // Send the data to be proceed by backend using Dispatch from Redux
            ?
            dispatch(signUp(data))
            :
            setConfirmPass(false)
    }

    const { user } = useSelector(state => state.authReducer.authData);
    // const loading = useSelector((state) => state.authReducer.loading)

    const [activeAdmin, setActiveAdmin] = useState(false)

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

            {
                user.role === 'admin' ? (
                    <div className='bg-white shadow-xl rounded-md w-full max-w-[380px] md:max-w-[740px] xl:max-w-[1100px] md:h-[70%] xl:h-[93%] mx-auto overflow-clip'>
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

                                    {/* <input
                                        type="text"
                                        placeholder='Role'
                                        name='role'
                                        className='input-form text-base'
                                        onChange={handleChange}
                                    /> */}

                                    <div className='grid grid-cols-2 accent-primary-blue'>
                                        <p className='font-semibold mb-2'>Menu</p><br />

                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role"
                                                value="admin"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                onClick={() => setActiveAdmin(!activeAdmin)}
                                            />
                                            <label>Admin</label>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role2"
                                                value="keuangan"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                disabled={activeAdmin}
                                            />
                                            <label>Keuangan</label>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role3"
                                                value="mahasiswa"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                disabled={activeAdmin}

                                            />
                                            <label>Mahasiswa</label>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role4"
                                                value="marketing"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                disabled={activeAdmin}
                                            />
                                            <label>Marketing</label>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role5"
                                                value="pegawai"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                disabled={activeAdmin}
                                            />
                                            <label>Pegawai</label>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role6"
                                                value="akreditasi"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                disabled={activeAdmin}
                                            />
                                            <label>Akreditasi</label>
                                        </div>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                name="role7"
                                                value="projects"
                                                className='cursor-pointer scale-150'
                                                onChange={handleChange}
                                                disabled={activeAdmin}
                                            />
                                            <label>Projects</label>
                                        </div>
                                    </div>

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
                                    <button className='button-primary mt-8 md:mt-0' type='submit' >
                                        {/* {loading ? "loading ... " : "Register"} */}
                                        Register
                                    </button>
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
                                        <h1 className='text-5xl xl:text-7xl font-bold break-words text-white'>Hello {user.username}.</h1>
                                        <p className='text-base text-white'>Tambahkan user baru yang dapat mengakses Pangkalan Data Universitas Mercu Buana</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
                    :
                    <h1>Maaf anda bukan admin</h1>
            }
        </div>
    )
}

export default Register