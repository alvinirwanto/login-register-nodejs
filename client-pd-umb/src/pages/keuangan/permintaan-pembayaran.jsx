import React from 'react'
import Layout from '../../components/Layout'

const PermintaanPembayaran = () => {
    return (
        <Layout
            pageTitle='Pengajuan PP dan PUM'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Dashboard Keuangan Mahasiswa"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMGI2NWM3MDMtYzMzNy00ZWQwLWExOTktNWQyY2Q1Yjk0MDE4IiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default PermintaanPembayaran