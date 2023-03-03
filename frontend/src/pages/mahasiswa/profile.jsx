import React from 'react'
import Layout from '../../components/Layout'


const Profile = () => {
    return (
        <Layout
            pageTitle='Profile'>
            <div className='mt-[10rem]'>
                <iframe
                    title="Dashboard Profile"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNjQ2YmZkNGUtZTU1Yy00MGMyLWEwMjYtMzdkZDFjZWRjOWFhIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default Profile