import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Document, Page } from "react-pdf/dist/esm/entry.vite";

import pdfFile from './Audited_Financial_Statement_2017.pdf'


export default function LaporanAudit() {
    return (
        <Layout
            pageTitle='Pengajuan PP dan PUM'
        >
            <div className='mt-[10rem]'>
                <object className='w-full h-[90vh]' data={pdfFile} type="application/pdf"></object>
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
