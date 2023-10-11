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
                    src="https://app.powerbi.com/reportEmbed?reportId=25d3a1c1-2de0-468e-8c7a-832d342e9a42&autoAuth=true&ctid=f31136bc-a790-450f-8ccb-cad3faae44f7" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default LaporanRealisasi 