import React from 'react'
import Layout from '../../components/Layout'

const DataPegawai = () => {
    return (
        <Layout
            pageTitle='Data Pegawai UMB'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Data Pegawai Dashboard"
                    // width="600" height="373.5" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiMGE0MWU0MzctZDkwMi00YzU0LTg2NzQtYzc3NTM2YjIxOGUwIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default DataPegawai
