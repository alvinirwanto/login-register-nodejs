import React from 'react'
import Layout from '../../components/Layout'

const Akreditasi = () => {
    return (
        <Layout
            pageTitle='Akreditasi'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Report Section"
                    // width="600" height="486" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiN2Y5NmRlNjYtMjk2MC00MDE1LWFhZTctMTRlZWZkNjExOTAyIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default Akreditasi
