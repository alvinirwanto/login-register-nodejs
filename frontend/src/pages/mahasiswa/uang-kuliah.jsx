import React from 'react'
import Layout from '../../components/Layout'


const UangKuliah = () => {
    return (
        <Layout
            pageTitle='Uang Kuliah'>
            <div className='mt-[10rem]'>
                <iframe
                    title="Dashboard Keuangan Mahasiswa"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiZGQ5MDA4NzUtZjQ4NS00YWJmLTgzM2MtODg4ZGEyMTBkMjZiIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default UangKuliah