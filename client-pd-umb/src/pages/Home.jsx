import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Home = () => {

    const { user } = useSelector((state) => state.authReducer.authData)

    return (
        <Layout pageTitle='Home'>
            <p className='w-full h-screen flex justify-center items-center'>{user.role}</p>
        </Layout>
    )
}

export default Home