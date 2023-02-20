import React from 'react'
import Layout from '../../components/Layout'
import DataMahasiswa from '../../sections/DataMahasiswa'

const Mahasiswa = () => {
    return (
        <Layout
            pageTitle='Data Mahasiswa'
        >
            <DataMahasiswa />
        </Layout>
    )
}

export default Mahasiswa