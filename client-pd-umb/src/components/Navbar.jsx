import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiX } from 'react-icons/bi'

import { logout } from '../action/AuthAction'


const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.authReducer.authData);

    const handleLogOut = () => {
        dispatch(logout())
    }


    // Pop up log out
    const [logOut, setLogOut] = useState(false)

    //Sidebar
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white fixed top-0 duration-300 z-[100] w-full px-4 md:px-8 xl:px-[5rem] py-2 flex justify-between items-center`}>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <a href='/'>
                        <img
                            alt='logo UMB'
                            src={shadowNav ? '/LogoUMB/logo-umb-full.png' : '/LogoUMB/logo-umb-full.png'}
                            className={`${shadowNav ? 'w-8 h-8 md:w-[3rem] md:h-[3rem] xl:h-[3.5rem] xl:w-[3.5rem]' : 'w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] xl:h-[6rem] xl:w-[6rem]'} duration-500 cursor-pointer`}
                        />
                    </a>
                    <div className={`border-l-2 border-primary-blue flex flex-col justify-center px-2 md:px-5 ${shadowNav ? 'py-2' : 'py-1 md:py-1'}`}>
                        <p className='text-xs md:text-base xl:text-lg font-semibold'>Pangkalan Data</p>
                        <p className='text-sm md:text-lg xl:text-lg font-semibold text-primary-blue'>Universitas Mercu Buana</p>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <FiMenu className='text-2xl' />
                </div>
                <div className='flex items-center gap-[3rem]'>

                    <div className={user.role === 'admin' || user.role === 'keuangan' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center'>
                                <span>Keuangan</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Pengajuan PP dan PUM</a>
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Saldo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={user.role === 'admin' || user.role === 'mahasiswa' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center'>
                                <span>Mahasiswa</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-full bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Data Mahasiswa</a>
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Keuangan</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={user.role === 'admin' || user.role === 'marketing' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center'>
                                <span>Marketing</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-full bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/marketing/data-closing' className='hover:bg-gray-100 px-6 py-4'>Data Closing</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={user.role === 'admin' || user.role === 'pegawai' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center'>
                                <span>Pegawai</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-full bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Rasio Dosen</a>
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Pressensi</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={user.role === 'admin' || user.role === 'projects' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center'>
                                <span>Projects</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-full bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Hambalang Farm</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block relative group' onClick={() => setShowSidebar(true)}>
                        <button className="w-9 h-9 bg-black rounded-full">
                            <img
                                src='/defaultProfile.png'
                                alt='profile'
                                width={500}
                                height={500}
                                className='object-cover'
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Modal Log Out */}
            <div className={logOut ? 'fixed bg-shadow-modal w-screen h-screen z-[300] flex justify-center items-center' : 'hidden'}>
                <div className='bg-white px-9 py-[3rem] rounded-md flex flex-col gap-9 items-center'>
                    <p className='text-xl font-semibold'>Apakah kamu yakin untuk keluar?</p>
                    <div className='flex items-center gap-8 font-semibold'>
                        <button className='hover:text-rose-500 text-primary-blue w-[16rem] py-2 text-center' onClick={handleLogOut}>Ya, saya yakin</button>
                        <button className='text-white bg-primary-blue border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300 w-[16rem] py-2 text-center' onClick={() => setLogOut(false)}>Tidak, kembali ke halaman</button>
                    </div>
                </div>
            </div>


            {/* SideBar */}
            <div className={showSidebar ? 'fixed top-0 w-screen h-screen bg-shadow-modal z-[100] shadow-xl' : 'hidden'}>


                <div className='bg-white h-full w-[30rem] absolute right-0 flex flex-col justify-between p-[3rem]'>
                    <div className='flex flex-col gap-[5rem]'>
                        <div className='flex justify-end'>
                            <BiX className='text-semibold text-4xl cursor-pointer' onClick={() => setShowSidebar(false)} />
                        </div>
                        <div className='flex flex-col gap-8 justify-center items-center'>
                            <div className="w-[5rem] h-[5rem] bg-black rounded-full">
                                <img
                                    src='/defaultProfile.png'
                                    alt='profile'
                                    width={500}
                                    height={500}
                                    className='object-cover'
                                />
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold text-xl capitalize'>{user.username}</p>
                                <p>{user.email}</p>
                                <p className='mt-6 capitalize'>{user.role}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 text-start'>
                        <button className='p-4 hover:bg-gray-100'>Reset Password</button>
                        {
                            user.role === 'admin' && (
                                <button className='p-4 hover:bg-gray-100'>Add New User</button>
                            )
                        }
                        <button onClick={() => setLogOut(true)} className='p-3 bg-rose-500 border-2 border-rose-500 hover:bg-transparent hover:text-rose-500 duration-300 text-white'>Log Out</button>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Navbar