import React from 'react'
import Layout from '../../components/Layout'

const LaporanKeuangan = () => {
    return (
        <Layout
            pageTitle='Laporan Keuangan'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Laporan Keuangan as of December 31, 2022"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"0
                    src="https://docs.google.com/spreadsheets/d/1jaGrtT3DrPEJfVk3OX254DOKHBV_J8omPD9ZgEOdRoU/edit?usp=sharing" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default LaporanKeuangan