import React from 'react'
import Layout from '../../components/Layout'

const Saldo = () => {
    return (
        <Layout
            pageTitle='Saldo'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Saldo Dashboard - Halaman 1"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDgwNGFmM2EtYzM4NS00NzZkLWJjNzctMWMzMTM1ZjE4NzVmIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default Saldo