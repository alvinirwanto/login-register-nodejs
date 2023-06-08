import React from 'react'
import Layout from '../../components/Layout'

const CostPerStudent = () => {
    return (
        <Layout
            pageTitle='Cost per Student'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Report Section"
                    // width="600" height="373.5" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiYmJiNjljNjQtNDc4OC00NmQwLTlkNjctYzk1ZmJiZjBiNzhiIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default CostPerStudent