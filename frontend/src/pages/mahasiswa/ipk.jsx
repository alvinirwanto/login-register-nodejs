import React from 'react'
import Layout from '../../components/Layout'


const IPK = () => {
    return (
        <Layout
            pageTitle='IPK'>
            <div className='mt-[10rem]'>
                <iframe
                    title="Dashboard IPK"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNjlkMDliMzYtYjQ5Yy00ZTU5LTg4ZTQtNWJjOTY0YmMxNThmIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default IPK