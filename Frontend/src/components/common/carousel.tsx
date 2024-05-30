'use client'

import Image from 'next/image';
import { StaticImageData } from "next/image"
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type catShortInfo = {
  name: string;
  shortDescription: string;
  imgPrew: StaticImageData;
}

type props = {
  catsShortInfo: catCard[]
}

const Carousel = ( catCard : catCard[]) => {

  return <Swiper

    pagination={{ type: 'bullets' }}
    modules={[Pagination]}
    slidesPerView={2}

    spaceBetween={20}
    grabCursor={true}
    className='flex grow max-w-[1040px] min-w-0 justify-center min-h-[300px]'
  >
    {catCard.map((cat: catCard) => {
      return (
        <SwiperSlide key={cat.id} className='flex grow min-w-0 max-w-[1100px] justify-center '>
          <div className='border-solid border-2 border-black flex max-w-[520px] min-h-[270px] justify-between '>
            <div className='flex  gap-4'>
              <div className='flex p-4 justify-items-center'>
                <Image src={cat.imgPrew} alt="cat_photo" height={230} width={287} className='flex grow min-w-0 object-cover min-h-[230px]'></Image>
              </div>
              <div className='flex max-w-[156px] m-2'>
                <div className='grid'>
                  <h1 className='text-center p-2 flex justify-center self-center'>{cat.name}</h1>
                  <span className=''>{cat.description}</span>
                  <div className='flex self-center justify-center h-[40px]'>
                    <Link href={`/catalog/${cat.id}`}>
                      <button className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2  ">Подробнее</button>
                    </Link>
                  </div>
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