'use client'

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type catShortInfo = {
    name: string;
    shortDescription: string;
    imgPrew: string;
}

type props = {
    catsShortInfo: catShortInfo[]
}

const Carousel = ({ catsShortInfo }: props) => {

    return <Swiper
        navigation
        pagination={{ type: 'fraction' }}
        modules={[Navigation]}
        slidesPerView={2}
        className='flex max-w-[1100px] justify-center gap-4'
    >
        {catsShortInfo.map((cat, index) => {
            return (
                <SwiperSlide key={index} className='flex max-w-[1100px] justify-center'>
                    <div className='border-solid border-2 border-black flex max-w-[520px] min-h-[270px] max-h-[500px]'>
                        <div className='flex'>
                            <div className='p-2'>
                                <Image height={230} width={287} src="" alt="cat_photo"></Image>
                            </div>
                            <div className='grid'>
                                <h1 className='text-center p-2 flex justify-center self-center'>{cat.name}</h1>
                                <span className='p-2'>{cat.shortDescription}</span>
                                <div className='flex self-center justify-center h-[40px]'>
                                    <button className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2  ">Выбрать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            )
        })
        }
    </Swiper>


}

export { Carousel }