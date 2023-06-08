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
                    src="https://app.powerbi.com/view?r=eyJrIjoiYmZiODIzZTAtMjc1NS00MjZiLTk1NmYtYjBkZGJiNGI1ZDcxIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default Akreditasi
