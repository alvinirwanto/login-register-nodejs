import React from 'react'
import Layout from '../../components/Layout'

export default function PengabdianPenelitian() {
    return (
        <Layout
            pageTitle='Pengabdian Penelitian'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Pengabdian Penelitian"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNThjMWVkMjItMGVhMy00ODVkLWI4ZGYtNTMzYTg5MzUwYWQ5IiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}