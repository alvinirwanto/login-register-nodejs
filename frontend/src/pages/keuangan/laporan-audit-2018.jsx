import React, { useState } from 'react'
import Layout from '../../components/Layout'

import pdfFile from './31_Agus_2018_YMB_Laporan_Audit.pdf'


export default function LaporanAudit2018() {
    return (
        <Layout
            pageTitle='Pengajuan PP dan PUM'
        >
            <div className='mt-[10rem]'>
                <object className='w-full h-screen' data={pdfFile} type="application/pdf"></object>
            </div>
        </Layout>
    )
}



// export default function LaporanAudit() {
//     const [numPages, setNumPages] = useState(null)
//     const [pageNumber, setPageNumber] = useState(1)

//     const onDocumentLoadSuccess = ({ numPages }) => {
//         setNumPages(numPages)
//         setPageNumber(1)
//     }

//     return (
//         <Layout
//             pageTitle='Pengajuan PP dan PUM'
//         >
//             <div className='mt-[10rem]'>
//                 <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page height='600' pageNumber={pageNumber} />
//                 </Document>

//                 <p>Page {pageNumber} of {numPages}</p>
//             </div>
//         </Layout>
//     )
// }
