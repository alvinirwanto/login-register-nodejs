import React from 'react'
import Layout from '../../components/Layout'

const MarketingCost = () => {
    return (
        <Layout
            pageTitle='Marketing Cost'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Report Section"
                    // width="600" height="373.5" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiYzk5YWQzZDEtNDFjYy00NGZlLWI0NDYtY2U0ODY1NDUxNzg3IiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default MarketingCost