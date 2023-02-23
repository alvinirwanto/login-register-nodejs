import React from 'react'
import Layout from '../../components/Layout'

const DataClosing = () => {
    return (
        <Layout
            pageTitle='Data Closing'
        >
            <div className='pt-[10rem]'>
                <iframe title="Report Section"
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiZWFjMmFjYTItY2MxOS00YmY2LWJjZDAtYjUzNWMxMmM0ZGVkIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D&pageName=ReportSection2b3fefe0ec91aa4553da" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default DataClosing