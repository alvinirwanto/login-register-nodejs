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
                    src="https://app.powerbi.com/view?r=eyJrIjoiY2EyZGFmZmMtODBmMy00NWI0LTg2MzQtNzRiODRlNWEyODdiIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default LaporanRealisasi 