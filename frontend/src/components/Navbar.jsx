import { useState, useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiX } from 'react-icons/bi'

import { logout } from '../action/AuthAction'
import { uploadImage } from '../action/UploadAction'
import { updateUser } from '../action/UserAction'
import { useParams } from "react-router-dom"

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


    // Redux
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.authReducer.authData);


    // To save the file
    const serverPublic = import.meta.env.VITE_PUBLIC_FOLDER


    // Log Out
    const handleLogOut = () => {
        dispatch(logout())
    }

    // Pop up log out
    const [logOut, setLogOut] = useState(false)

    //Sidebar
    const [showSidebar, setShowSidebar] = useState(false)


    const param = useParams()
    const [showEditPhoto, setShowEditPhoto] = useState(false)

    const [formData, setFormData] = useState(user)

    const [profileImage, setProfileImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setProfileImage(img)
        }
    };

    // form submission
    const handleSubmit = (e) => {
        // e.preventDefault();

        let UserData = formData;
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
        dispatch(updateUser(param.id, UserData))
    };

    const exitEdit = (e) => {
        e.preventDefault()
        setShowEditPhoto(false)
    }

    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white fixed top-0 duration-300 z-[100] w-full px-4 md:px-8 xl:px-[5rem] py-2 flex justify-between items-center`}>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <a href='/'>
                        <img
                            alt='logo UMB'
                            src={shadowNav ? '/LogoUMB/logo-umb-full.png' : '/LogoUMB/logo-umb-full.png'}
                            className={`${shadowNav ? 'w-8 h-8 md:w-[3rem] md:h-[3rem] xl:h-[3.5rem] xl:w-[3.5rem]' : 'w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] xl:h-[5rem] xl:w-[5rem]'} duration-500 cursor-pointer`}
                        />
                    </a>
                    <div className={`border-l-2 border-primary-blue flex flex-col justify-center px-2 md:px-5 ${shadowNav ? 'py-2' : 'py-1 md:py-1'}`}>
                        <p className='text-xs md:text-base xl:text-md font-semibold'>Pangkalan Data</p>
                        <p className='text-sm md:text-lg xl:text-md font-semibold text-primary-blue'>Universitas Mercu Buana</p>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <FiMenu className='text-2xl' />
                </div>
                <div className='flex items-center gap-[3rem] text-sm'>

                    <div className={user.role === 'admin' || user.role === 'keuangan' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center text-sm'>
                                <span>Keuangan</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/keuangan/permintaan-pembayaran' className='hover:bg-gray-100 p-4'>Pengajuan PP dan PUM</a>
                                    <a href='/keuangan/laporan-keuangan' className='hover:bg-gray-100 p-4'>Laporan Keuangan</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={user.role === 'admin' || user.role === 'mahasiswa' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center text-sm'>
                                <span>Mahasiswa</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/mahasiswa/data-mahasiswa' className='hover:bg-gray-100 p-4'>Data Mahasiswa</a>
                                    <a href='/mahasiswa/uang-kuliah' className='hover:bg-gray-100 p-4'>Uang Kuliah</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={user.role === 'admin' || user.role === 'marketing' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center text-sm'>
                                <span>Marketing</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/marketing/data-closing' className='hover:bg-gray-100 p-4'>Data Closing</a>
                                    <a href='/marketing/data-closing' className='hover:bg-gray-100 p-4'>Cost per Student</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={user.role === 'admin' || user.role === 'pegawai' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center text-sm'>
                                <span>Pegawai</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/pegawai/rasio-dosen' className='hover:bg-gray-100 p-4'>Rasio Dosen</a>
                                    <a href='/pegawai/presensi' className='hover:bg-gray-100 p-4'>Presensi</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={user.role === 'admin' || user.role === 'akreditasi' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <a href='/akreditasi' className='w-full text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold'>Akreditasi</a>
                    </div>


                    <div className={user.role === 'admin' || user.role === 'projects' ? 'hidden md:block relative group'
                        : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-2 justify-center items-center text-sm'>
                                <span>Projects</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/proyek/hambalang-farm' className='hover:bg-gray-100 p-4'>Hambalang Farm</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block relative group' onClick={() => setShowSidebar(true)}>
                        <button className="w-[2.2rem] h-[2.2rem] rounded-full overflow-clip">
                            <img
                                src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + 'defaultProfile.png'}
                                alt='profile'
                                className='object-cover w-full h-full'
                            />
                        </button>
                    </div>
                </div>
            </nav>

            

            {/* Modal Log Out */}
            <div className={logOut ? 'fixed top-0 bg-shadow-modal w-screen h-screen z-[500] flex justify-center items-center' : 'hidden'}>
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
                            <div
                                onClick={() => setShowEditPhoto(!showEditPhoto)}
                                className="w-[5rem] h-[5rem] bg-black rounded-full relative overflow-clip group">
                                <img
                                    src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + 'defaultProfile.png'}
                                    alt='profile'
                                    className='object-cover w-full h-full'
                                />
                                <div className={showEditPhoto ? 'hidden' : 'bg-[#00000060] w-full h-full hidden group-hover:flex items-center justify-center absolute top-0 cursor-pointer'}>
                                    <p className='text-xs text-white text-center'>
                                        Ganti Foto
                                    </p>
                                </div>
                            </div>

                            <form className={showEditPhoto ? 'flex flex-col justify-center' : 'hidden'}>
                                <input type="file" name="profileImage" onChange={onImageChange} />
                                <div className='grid grid-cols-2 gap-4 mt-6'>
                                    <button
                                        className='button-primary'
                                        type='submit'
                                        onClick={handleSubmit}
                                    >
                                        Simpan
                                    </button>
                                    <button
                                        className='text-rose-500 text-center font-semibold w-full'
                                        onClick={exitEdit}
                                    >
                                        Batal
                                    </button>
                                </div>
                            </form>

                            <div className={showEditPhoto ? 'hidden' : 'text-center'}>
                                <p className='font-semibold text-xl capitalize'>{user.username}</p>
                                <p>{user.email}</p>
                                <p className='mt-6 capitalize'>{user.role}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 text-start'>
                        <a href={`/profile/${user._id}`}
                            className='p-4 hover:bg-gray-100 text-center cursor-pointer'
                        >
                            Ganti Password
                        </a>
                        {
                            user.role === 'admin' && (
                                <a href='/register' className='p-4 hover:bg-gray-100 text-center'>Add New User</a>
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