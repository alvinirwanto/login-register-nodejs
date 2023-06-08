import React from 'react'
import Layout from '../../components/Layout'

export default function PublikasiUniversitas() {
    return (
        <Layout
            pageTitle='Publikasi Universitas'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Publikasi Universitas"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiOTgwNjhlYmMtNjVjOC00NGI3LThjNDgtNDQ2MTYxNWNhNWVhIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}
