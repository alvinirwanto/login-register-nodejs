import React from 'react'
import Layout from '../../components/Layout'

const Presensi = () => {
    return (
        <Layout
            pageTitle='Presensi'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Data Closing 230223"
                    className='w-full h-screen'
                    // width="600" height="373.5" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiOWJkZmQ2ZmUtMWJhOC00Nzc1LTkwNTgtMjU0ZDk5MWRmMmFjIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D&pageName=ReportSection0ca669535a15e9d83ea2" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default Presensi
