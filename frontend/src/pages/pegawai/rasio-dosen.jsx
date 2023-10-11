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
                    src="https://app.powerbi.com/view?r=eyJrIjoiZDgyMzdhYTktNzI5OS00Yjg4LTg5MjUtZGI0MGM5MDFmZWViIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default RasioDosen
