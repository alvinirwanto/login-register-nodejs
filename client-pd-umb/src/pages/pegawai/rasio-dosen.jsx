import React from 'react'
import Layout from '../../components/Layout'

const RasioDosen = () => {
    return (
        <Layout
            pageTitle='Rasio Dosen'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Ratio Student and Dosen - Ratio Mahasiswa Dosen"
                    // width="600" height="373.5" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiOWM4MWNjNzMtNzE4NC00MWJjLThjMDgtZDA3NWZkOGY5YjA5IiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default RasioDosen
