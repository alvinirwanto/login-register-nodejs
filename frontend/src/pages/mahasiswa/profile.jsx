import React from 'react'
import Layout from '../../components/Layout'


const ProfileMahasiswa = () => {
    return (
        <Layout
            pageTitle='Profile'>
            <div className='mt-[10rem]'>
                <iframe
                    title="Dashboard Profile"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDNlNDRmOWQtOTc2NS00ZDZhLTk3MjEtMDU3MjYyNjBmYTVjIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default ProfileMahasiswa