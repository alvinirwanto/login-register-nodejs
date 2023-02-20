import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import HeroSection from '../sections/HeroSection'
import DataMahasiswa from '../sections/DataMahasiswa'

const Home = () => {

    const { user } = useSelector((state) => state.authReducer.authData)

    return (
        <Layout pageTitle='Home'>
            <HeroSection />
            <DataMahasiswa />
        </Layout>
    )
}

export default Home