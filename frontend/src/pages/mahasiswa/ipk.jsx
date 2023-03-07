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
                    src="https://app.powerbi.com/view?r=eyJrIjoiOTczOTE0YTgtMjRkOC00NDQ4LWFkMDctZmQ1MGEyNDg0NjIyIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default IPK