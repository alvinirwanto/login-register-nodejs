import React from 'react'
import Layout from '../../components/Layout'

const PermintaanPembayaran = () => {
    return (
        <Layout
            pageTitle='Pengajuan PP dan PUM'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Pengajuan PP dan PUM"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiZDYwZTg1NmUtMDM2Ni00ZDgxLWFmYmQtMmUwMjIwMTA0MzEyIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default PermintaanPembayaran