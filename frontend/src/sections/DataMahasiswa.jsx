import React from 'react'

const DataMahasiswa = () => {
    return (
        <div name='data-mahasiswa' className='mt-[5rem]'>
            <iframe
                title="All student dashboard 161222 - Halaman 1"
                // width="600" height="373.5" 
                className='w-full h-[200vh]'
                src="https://app.powerbi.com/view?r=eyJrIjoiZmUwMTAzMmEtY2Y4ZC00ZmZjLWFiNDctNDdiNDI4YjMxZDQzIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" allowFullScreen={true}></iframe>

                {/* <iframe className='pt-10' src="https://app.powerbi.com/reportEmbed?reportId=bf58d6d0-3548-4f4d-9012-2355ceaa84ec&autoAuth=true&ctid=f31136bc-a790-450f-8ccb-cad3faae44f7 " frameborder="0"></iframe> */}
        </div>
    )
}

export default DataMahasiswa