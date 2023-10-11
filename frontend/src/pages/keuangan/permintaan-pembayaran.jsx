import React from 'react'
import Layout from '../../components/Layout'

const PermintaanPembayaran = () => {
    return (
        <Layout
            pageTitle='Payment Request dan Cash Advance'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Pengajuan PP dan PUM"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiM2I0MTI2OTItYjZmNi00NzM5LTg1MDItZDMwZWUwOThlNjRhIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default PermintaanPembayaran