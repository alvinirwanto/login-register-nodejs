import React from 'react'

import { IoArrowForward } from 'react-icons/io5'

const HeroSection = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[3rem] h-full md:h-[70vh] xl:h-screen pt-[10rem] md:pt-[3rem]'>
            <div className='flex flex-col gap-2 justify-center'>
                <h1 className='text-xl font-semibold text-primary-green'>Selamat datang di</h1>
                <p className='text-3xl xl:text-5xl font-bold text-primary-blue xl:leading-[3.5rem]'>Pangkalan Data <br /> Universitas Mercu Buana</p>
                <p className='mt-5'>Pangkalan data Universitas Mercu Buana merupakan sajian informasi yang menyajikan data dan statistik tentang Universitas Mercu Buana secara aktual, terbaru, dan terpercaya.</p>

                <a
                    href='/login'
                    className='self-start flex gap-4 items-center mt-8 bg-primary-blue text-white rounded-md px-6 py-4'>
                    Lihat lebih lanjut
                    <IoArrowForward />
                </a>
            </div>
            <div className=''>
                <img
                    src='/data.svg'
                    alt='icon'
                    className='w-full h-full object-contain'
                />
            </div>
        </div>
    )
}

export default HeroSection