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
                    src="https://app.powerbi.com/view?r=eyJrIjoiYzM5YTNlNjAtMDhjMi00N2NkLTg5YjEtM2Y0MjhlMDc4YjNkIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default DataPegawai
