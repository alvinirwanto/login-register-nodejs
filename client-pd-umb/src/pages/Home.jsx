import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import HeroSection from '../sections/HeroSection'

const Home = () => {

    const { user } = useSelector((state) => state.authReducer.authData)

    return (
        <Layout pageTitle='Home'>

            <HeroSection />
            <p className='w-full h-screen flex justify-center items-center'>{user.role}</p>
        </Layout>
    )
}

export default Home