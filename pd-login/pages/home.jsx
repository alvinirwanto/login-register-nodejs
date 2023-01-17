import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

import Link from 'next/link'


const HomePage = () => {
    const user = useSelector((state) => state.AuthReducer.authData);
    const router = useRouter()

    const [dataProfile, setDataProfile] = useState([])

    useEffect(() => {
        !user && router.push('/login')

        const data = JSON.parse(localStorage.getItem('profile'))

        setDataProfile(data.user)
    }, [])

    // console.log(dataProfile)

    return (
        <div>
            <Navbar />
            <div className='fixed top-0 right-0 m-8'>
                <button
                    className='bg-black text-white px-8 py-2'
                >
                    Sign Out
                </button>
            </div>

            <div className='flex justify-center items-center h-screen w-full text-3xl'>

                <div className='flex gap-6'>
                    {
                        dataProfile.role === 'admin' && (
                            <p>Hello</p>
                        )
                    }

                    <p className={dataProfile.role === 'admin' ? 'block'
                        : dataProfile.role === 'keuangan' ? 'block'
                            : 'hidden'}>User</p>
                </div>

                <Link
                    href={`user/${dataProfile._id}`}
                >klik</Link>
            </div>
        </div>
    )
}

export default HomePage