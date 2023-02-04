import React from 'react'
import Layout from '../../components/Layout'

const Keuangan = () => {
    return (
        <Layout
            pageTitle='Data Keuangan'>
            <div className='mt-[10rem]'>
                <iframe
                    title="Dashboard Keuangan Mahasiswa"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNDBmZTZmZTMtNWMxYi00YjQ5LWJiN2QtOTYwMGU2MDRkZjgzIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default Keuangan