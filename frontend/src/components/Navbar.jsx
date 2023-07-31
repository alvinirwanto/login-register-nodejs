import { useState, useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { FiMenu, FiX } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { logout } from '../action/AuthAction'
import { uploadImage } from '../action/UploadAction'
import { updateUser } from '../action/UserAction'
import { useParams } from "react-router-dom"

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from '../accordion.module.css'

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

    //Edit Photo
    const [changeProfilePict, setChangeProfilePict] = useState(false)

    // SideBar mobile 
    const [openSidebar, setOpenSidebar] = useState(false)

    // Sub Menu
    const [openSubMenu, setOpenSubMenu] = useState(false)


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


    const AccordionItem = ({ header, ...rest }) => (
        <Item
            {...rest}
            header={
                <>
                    {header}
                    <MdKeyboardArrowDown className={styles.chevron} />
                </>
            }
            className={styles.item}
            buttonProps={{
                className: ({ isEnter }) =>
                    `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
            }}
            contentProps={{ className: styles.itemContent }}
            panelProps={{ className: styles.itemPanel }}
        />
    );


    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white fixed top-0 duration-300 z-[100] w-full px-4 md:px-8 xl:px-[4rem] py-2 flex justify-between items-center`}>
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


                {/* ================= Desktop ====================== */}
                <div className='hidden xl:flex items-center gap-8 text-sm'>

                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('akreditasi')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <a href='/akreditasi' className='w-full text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold'>Akreditasi</a>
                    </div>

                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('keuangan')
                            ? 'hidden md:block relative group/main'
                            : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-1 justify-center items-center text-sm'>
                                <span>Keuangan</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover/main:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/keuangan/permintaan-pembayaran' className='hover:bg-gray-100 py-3 px-4'>Payment Request dan Cash Advance</a>
                                    <a href='/keuangan/laporan-keuangan' className='hover:bg-gray-100 py-3 px-4'>Laporan Keuangan</a>
                                    <div className="group/sub relative">
                                        <button className="w-full text-left hover:bg-gray-100 py-3 px-4 focus:outline-none">
                                            Laporan Audit
                                        </button>
                                        <div className="absolute bg-white hidden bg-grey-200 group-hover/sub:block w-[10rem] top-0 left-full shadow-lg">
                                            <div className="flex flex-col">
                                                <a href='/keuangan/laporan-audit/2017' className='hover:bg-gray-100 py-3 px-4'>2017</a>
                                                <a href='/keuangan/laporan-audit/2018' className='hover:bg-gray-100 py-3 px-4'>2018</a>
                                                <a href='/keuangan/laporan-audit/2019' className='hover:bg-gray-100 py-3 px-4'>2019</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href='/keuangan/laporan-realisasi' className='hover:bg-gray-100 py-3 px-4'>Laporan Realisasi</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('mahasiswa')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-1 justify-center items-center text-sm'>
                                <span>Mahasiswa</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/mahasiswa/data-mahasiswa' className='hover:bg-gray-100 py-3 px-4'>Data Mahasiswa</a>
                                    <a href='/mahasiswa/uang-kuliah' className='hover:bg-gray-100 py-3 px-4'>Uang Kuliah</a>
                                    <a href='/mahasiswa/profile' className='hover:bg-gray-100 py-3 px-4'>Profile</a>
                                    <a href='/mahasiswa/ipk' className='hover:bg-gray-100 py-3 px-4'>IPK</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('marketing')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-1 justify-center items-center text-sm'>
                                <span>Marketing</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/marketing/data-closing' className='hover:bg-gray-100 py-3 px-4'>Data Closing</a>
                                    {/* <a href='/marketing/cost-per-student' className='hover:bg-gray-100 py-3 px-4'>Cost per Student</a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('pegawai')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-1 justify-center items-center text-sm'>
                                <span>Pegawai</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/pegawai/rasio-dosen' className='hover:bg-gray-100 py-3 px-4'>Rasio Dosen</a>
                                    <a href='/pegawai/presensi' className='hover:bg-gray-100 py-3 px-4'>Presensi</a>
                                    <a href='/pegawai/data-pegawai' className='hover:bg-gray-100 py-3 px-4'>Data Pegawai</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('publikasi')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-1 justify-center items-center text-sm'>
                                <span>Publikasi</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/publikasi/publikasi-universitas' className='hover:bg-gray-100 py-3 px-4'>Publikasi Universitas</a>
                                    <a href='/publikasi/pengabdian-penelitian' className='hover:bg-gray-100 py-3 px-4'>Pengabdian dan Penelitian</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        user.role.includes('admin')
                            || user.role.includes('arsip')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <a href='https://fs.mercubuana.ac.id/drive' className='w-full text-sm bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold'>Arsip</a>
                    </div>


                    {/* <div className={
                        user.role.includes('admin')
                            || user.role.includes('projects')
                            ? 'hidden md:block relative group'
                            : 'hidden'}>
                        <button className="w-full text-base bg-transparent rounded-lg md:w-auto md:inline md:mt-0 focus:outline-none font-semibold">
                            <div className='flex gap-1 justify-center items-center text-sm'>
                                <span>Projects</span>
                                <MdKeyboardArrowDown />
                            </div>
                        </button>

                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="w-[10rem] bg-white shadow-lg">
                                <div className="flex flex-col">
                                    <a href='/proyek/hambalang-farm' className='hover:bg-gray-100 py-3 px-4'>Hambalang Farm</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='hidden md:block relative group'>
                        <button className="w-[2.2rem] h-[2.2rem] rounded-full overflow-clip">
                            <div className='bg-primary-blue h-full w-full text-white flex justify-center items-center'>
                                <span className='text-xl'>{user.username.charAt(0)}</span>
                            </div>
                            {/* <img
                                src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + 'defaultProfile.png'}
                                alt='profile'
                                className='object-cover w-full h-full'
                            /> */}
                        </button>

                        <div className="absolute -right-10 z-10 hidden bg-grey-200 group-hover:block">
                            <div className="bg-white shadow-lg w-[390px] p-4">
                                <div className='flex items-center gap-4'>
                                    <div
                                        // onMouseOver={() => setShowEditPhoto(true)}
                                        // onMouseLeave={() => setShowEditPhoto(false)}
                                        // onClick={() => setChangeProfilePict(true)}
                                        className="w-[5rem] h-[5rem] rounded-full relative overflow-clip group">
                                        {/* <img
                                            src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + 'defaultProfile.png'}
                                            alt='profile'
                                            className='object-cover w-full h-full'
                                        /> */}

                                        <div className='bg-primary-blue h-full w-full text-white flex justify-center items-center'>
                                            <span className='text-4xl'>{user.username.charAt(0)}</span>
                                        </div>
                                        {/* <div className={showEditPhoto ? 'bg-[#00000060] w-full h-full hidden group-hover:flex items-center justify-center absolute top-0 cursor-pointer' : 'hidden'}>
                                            <p className='text-xs text-white text-center'>
                                                Ganti Foto
                                            </p>
                                        </div> */}
                                    </div>

                                    {/* <form className={changeProfilePict ? 'flex flex-col justify-center' : 'hidden'}>
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
                                    </form> */}


                                    <div className='flex flex-col gap-[5px]'>
                                        <span className='text-sm font-medium mb-1'>Selamat datang,</span>
                                        <span className='font-bold text-[1.5rem] break-words'>{user.username}</span>
                                        <span className='text-gray-400 text-sm break-words'>{user.email}</span>
                                    </div>
                                </div>

                                <ul className='flex flex-col mt-6 text-[15px]'>
                                    <li>
                                        <a href={`/profile/${user._id}`}
                                            className='hover:bg-gray-100 py-2 px-4 w-full flex'
                                        >
                                            Ganti Password
                                        </a>
                                    </li>

                                    <li>
                                        {
                                            user.role.includes('admin') && (
                                                <a href='/register' className='hover:bg-gray-100 py-2 px-4 w-full flex'>
                                                    Add New User
                                                </a>
                                            )
                                        }
                                    </li>
                                    <li>
                                        <button onClick={() => setLogOut(true)} className='flex w-full text-rose-500 hover:bg-rose-500 hover:text-white duration-200 py-2 px-4'>
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* === Burger button === */}
                <div className='block xl:hidden z-[500]'>
                    <FiMenu
                        className='text-2xl'
                        onClick={() => setOpenSidebar(true)}
                    />
                </div>

                {/* ================= Tablet ====================== */}

                {/* ================= Mobile ====================== */}


            </nav>

            {/* SideBar Mobile */}
            <div className={openSidebar ? 'fixed top-0 z-[100] h-screen w-screen bg-[#0000004a] flex justify-center items-center md:justify-end md:items-start md:pt-[5rem] md:pr-[4rem]' : 'hidden'}>
                <div className="bg-white rounded-sm w-[90%] md:w-[70%] p-6 md:px-8">

                    <div className='flex justify-end'>
                        <FiX
                            className='text-2xl'
                            onClick={() => setOpenSidebar(false)}
                        />
                    </div>

                    <div className='flex items-center gap-4 border-b-[1px] border-gray-300 pb-4'>
                        <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] rounded-full relative overflow-clip group">
                            <div className='bg-primary-blue h-full w-full text-white flex justify-center items-center'>
                                <span className='text-4xl'>{user.username.charAt(0)}</span>
                            </div>
                        </div>


                        <div className='flex flex-col'>
                            <span className='text-sm md:text-base font-medium'>Selamat datang,</span>
                            <span className='font-bold text-[1.3rem] md:text-3xl break-words'>{user.username}</span>
                            <span className='text-gray-400 text-sm md:text-base break-words'>{user.email}</span>
                        </div>
                    </div>

                    <div className='py-4 text-base md:text-xl'>
                        <Accordion>
                            <div className='flex gap-2 justify-between items-center w-full'>
                                <a href='/akreditasi' className='w-full py-2'>Akreditasi</a>
                            </div>

                            <AccordionItem header="Keuangan">
                                <div className="flex flex-col">
                                    <a href='/keuangan/permintaan-pembayaran' className='hover:bg-gray-100 p-2'>Payment Request dan Cash Advance</a>
                                    <a href='/keuangan/laporan-keuangan' className='hover:bg-gray-100 p-2'>Laporan Keuangan</a>

                                    <Accordion className='ml-2'>
                                        <AccordionItem header='Laporan Audit'>
                                            <div className="flex flex-col gap-1">
                                            <a href='/keuangan/laporan-audit/2017' className='hover:bg-gray-100 p-2'>2017</a>
                                            <a href='/keuangan/laporan-audit/2018' className='hover:bg-gray-100 p-2'>2018</a>
                                            <a href='/keuangan/laporan-audit/2019' className='hover:bg-gray-100 p-2'>2019</a>
                                            </div>
                                        </AccordionItem>
                                    </Accordion>

                                    <a href='/keuangan/laporan-realisasi' className='hover:bg-gray-100 p-2'>Laporan Realisasi</a>
                                </div>
                            </AccordionItem>

                            <AccordionItem header="Mahasiswa">
                                <div className="flex flex-col">
                                    <a href='/mahasiswa/data-mahasiswa' className='hover:bg-gray-100 p-2'>Data Mahasiswa</a>
                                    <a href='/mahasiswa/uang-kuliah' className='hover:bg-gray-100 p-2'>Uang Kuliah</a>
                                </div>
                            </AccordionItem>
                            <div className={openSubMenu === 'mahasiswa' ? 'flex flex-col text-sm' : 'hidden'}>
                                <a href='/mahasiswa/data-mahasiswa' className='hover:bg-gray-100 py-3 px-4'>Data Mahasiswa</a>
                                <a href='/mahasiswa/uang-kuliah' className='hover:bg-gray-100 py-3 px-4'>Uang Kuliah</a>
                                <a href='/mahasiswa/profile' className='hover:bg-gray-100 py-3 px-4'>Profile</a>
                                <a href='/mahasiswa/ipk' className='hover:bg-gray-100 py-3 px-4'>IPK</a>
                            </div>

                            <AccordionItem header="Marketing">
                                <div className="flex flex-col">
                                    <a href='/marketing/data-closing' className='hover:bg-gray-100 p-2'>Data Closing</a>
                                    {/* <a href='/marketing/cost-per-student' className='hover:bg-gray-100 p-2'>Cost per Student</a> */}
                                </div>
                            </AccordionItem>
                            <div className={openSubMenu === 'mahasiswa' ? 'flex flex-col text-sm' : 'hidden'}>
                                <a href='/mahasiswa/data-mahasiswa' className='hover:bg-gray-100 py-3 px-4'>Data Mahasiswa</a>
                                <a href='/mahasiswa/uang-kuliah' className='hover:bg-gray-100 py-3 px-4'>Uang Kuliah</a>
                                <a href='/mahasiswa/profile' className='hover:bg-gray-100 py-3 px-4'>Profile</a>
                                <a href='/mahasiswa/ipk' className='hover:bg-gray-100 py-3 px-4'>IPK</a>
                            </div>

                            <AccordionItem header="Pegawai">
                                <div className="flex flex-col">
                                    <a href='/pegawai/rasio-dosen' className='hover:bg-gray-100 p-2'>Rasio Dosen</a>
                                    <a href='/pegawai/presensi' className='hover:bg-gray-100 p-2'>Presensi</a>
                                    <a href='/pegawai/data-pegawai' className='hover:bg-gray-100 p-2'>Data Pegawai</a>
                                </div>
                            </AccordionItem>

                            <AccordionItem header="Publikasi">
                                <div className="flex flex-col">
                                    <a href='/publikasi/publikasi-universitas' className='hover:bg-gray-100 p-2'>Publikasi Universitas</a>
                                    <a href='/publikasi/pengabdian-penelitian' className='hover:bg-gray-100 p-2'>Pengabdian dan Penelitian</a>
                                </div>
                            </AccordionItem>

                            {/* <AccordionItem header="Projects">
                                <div className="flex flex-col">
                                    <a href='/proyek/hambalang-farm' className='hover:bg-gray-100 p-2'>Hambalang Farm</a>

                                </div>
                            </AccordionItem> */}

                            <div className='flex gap-2 justify-between items-center w-full'>
                                <a href='https://fs.mercubuana.ac.id/drive' className='w-full py-2'>Arsip</a>
                            </div>

                        </Accordion>
                    </div>

                    <ul className='flex flex-col mt-6 text-[15px] text-base md:text-xl'>
                        <li>
                            <a href={`/profile/${user._id}`}
                                className='py-2 w-full flex'
                            >
                                Ganti Password
                            </a>
                        </li>

                        <li>
                            {
                                user.role.includes('admin') && (
                                    <a href='/register' className='py-2 w-full flex'>
                                        Add New User
                                    </a>
                                )
                            }
                        </li>
                        <li>
                            <button onClick={() => setLogOut(true)} className='flex w-full text-rose-500 hover:bg-rose-500duration-200 py-2'>
                                Log Out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>



            {/* Modal Log Out */}
            <div className={logOut ? 'fixed top-0 bg-shadow-modal w-screen h-screen z-[300] flex justify-center items-center' : 'hidden'}>
                <div className='bg-white w-[95%] md:w-auto px-9 py-[3rem] rounded-md flex flex-col gap-9 items-center'>
                    <p className='text-xl font-semibold'>Apakah kamu yakin untuk keluar?</p>
                    <div className='flex items-center gap-8 font-semibold'>
                        <button className='text-rose-500 hover:text-primary-blue w-[10rem] md:w-[16rem] py-2 text-center' onClick={handleLogOut}>Ya, saya yakin</button>
                        <button className='text-white bg-primary-blue border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300 w-[10rem] md:w-[16rem] py-2 text-center' onClick={() => setLogOut(false)}>Tidak, kembali ke halaman</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar