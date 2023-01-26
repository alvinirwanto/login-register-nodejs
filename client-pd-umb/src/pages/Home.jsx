import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const Home = () => {

    const { user } = useSelector((state) => state.authReducer.authData)

    return (
        <div>
            <p className='w-full h-screen flex justify-center items-center'>{user.role}</p>
        </div>
    )
}

export default Home