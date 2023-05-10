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
                    src="https://app.powerbi.com/view?r=eyJrIjoiMzczYTQ5OTMtMjIwOS00ZjY1LTk5NjEtYmNkY2Y1M2I3MWQyIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}