import { useState, useEffect, use } from 'react'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const DataClosing = () => {
    const user = useSelector((state) => state.AuthReducer.authData);
    const router = useRouter()

    const [dataProfile, setDataProfile] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('profile'))
        setDataProfile(data.user)
    }, [])

    // useEffect(() => {
    //     dataProfile.role !== 'marketing' ? router.push('/home') : ''
    //     console.log(dataProfile)
    // }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {
                dataProfile.role === 'marketing' || dataProfile.role === 'admin' ?
                    <p>Hello</p>
                    :
                    <p>Balik lu</p>
            }
        </div>
    )
}

export default DataClosing