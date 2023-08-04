import React from 'react'
import Layout from '../../components/Layout'

const DataClosing = () => {
   g return (
        <Layout
            pageTitle='Data Closing'
        >
            <div className='pt-[10rem]'>
                {/* <iframe
                    title="Data Closing 200123 - Dashboard"
                    // width="600" height="373.5" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiOTUzNzlmNGUtNTRhYy00MzEwLWE5OWUtM2UxY2VhZTdlMGRhIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe> */}

                <iframe
                    title="Data Closing 230223"
                    className='w-full h-screen'
                    // width="600" 
                    // height="373.5" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiODM3MzVmZGItM2QwOS00MTQyLThkN2EtMzg4NjZkNDYzNTQ5IiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default DataClosing