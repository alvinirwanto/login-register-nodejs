import React from 'react'
import Layout from '../../components/Layout'

const LaporanRealisasi = () => {
    return (
        <Layout
            pageTitle='Laporan Realisasi'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Laporan Realisasi"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"0
                    src="https://app.powerbi.com/view?r=eyJrIjoiYzFmNjg5OGMtNWQyOC00YzcwLWEzYTYtYWFhYzIxZDgxNGE3IiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default LaporanRealisasi 