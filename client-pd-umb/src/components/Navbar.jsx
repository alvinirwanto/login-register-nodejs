import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

// import LogoUMB from '../public/LogoUMB/logo-umb-full.png'
// import LogoUMB2 from '../public/LogoUMB/logo-umb.png'

import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
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

    // const [dataProfile, setDataProfile] = useState([])

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('profile'))
    //     setDataProfile(data.user)
    // }, [])

    const handleLogOut = () => {
        dispatch(logout())
    }


    // Pop up log out
    const [logOut, setLogOut] = useState(false)

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
                    <div className={`border-l-2 border-primary-blue flex flex-col justify-center px-2 md:px-5 ${shadowNav ? 'py-8' : 'py-1 md:py-1'}`}>
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

                    <div className='hidden md:block relative group'>
                        <button className="w-9 h-9 bg-black rounded-full">
                            <img
                                src='/defaultProfile.png'
                                alt='profile'
                                width={500}
                                height={500}
                                className='object-cover'
                            />
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block right-0">
                            <div className="w-full bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/home' className='hover:bg-gray-100 px-6 py-4'>Reset Password</a>
                                    <button className="text-rose-500 px-6 py-4 hover:bg-rose-500 hover:text-white" onClick={() => setLogOut(true)}>Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={logOut ? 'fixed bg-[#0000005a] w-screen h-screen z-[100] flex justify-center items-center' : 'hidden'}>
                <div className='bg-white px-9 py-[3rem] rounded-md flex flex-col gap-9 items-center'>
                    <p className='text-xl font-semibold'>Apakah kamu yakin untuk keluar?</p>
                    <div className='flex items-center gap-8 font-semibold'>
                        <button className='hover:text-rose-500 text-primary-blue w-[16rem] py-2 text-center' onClick={handleLogOut}>Ya, saya yakin</button>
                        <button className='text-white bg-primary-blue border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300 w-[16rem] py-2 text-center' onClick={() => setLogOut(false)}>Tidak, kembali ke halaman</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar