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

const Carousel = ({ catsShortInfo }: props) => {

  if (typeof window !== "undefined") {
    console.log(window.innerWidth)
  }


  return <div className='flex justify-center min-w-0'>
    <Swiper

      pagination={{ type: 'bullets' }}
      modules={[Pagination]}
      slidesPerView={2}
      css-mode="true"

      spaceBetween={20}
      grabCursor={true}
      className='flex grow max-w-[1040px] min-w-0 justify-center min-h-[300px]'
    >
      {catsShortInfo.map((cat: catCard) => {
        return (
          <div key={cat.id} className='flex min-w-0 justify-center '>
            <SwiperSlide key={cat.id} className='flex min-w-0 justify-center '>
              <div className='border-solid border-2 border-black flex max-w-[520px] min-h-[270px] justify-between '>
                <div className='flex  gap-4'>
                  <div className='flex p-4 justify-items-center  max-w-full'>
                    <Image src={cat.src} alt="cat_photo" height={230} width={287} className='object-contain md:object-scale-down min-w-4'></Image>
                  </div>
                  <div className='flex max-w-[156px] m-2'>
                    <div className='grid'>
                      <h1 className='text-center p-2 flex justify-center self-center'>{cat.name}</h1>
                      <span className='grid grid-cols-1 gap-3 text-sm text-tertiary marker:text-2xl min-w-0 min-h-0'>{cat.description}</span>
                      <div className='flex self-center justify-center h-[40px]'>
                        <Link className='flex min-w-0 min-h-0' href={`/catalog/${cat.id}`}>
                          <button className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2 min-w-0 min-h-0 ">Подробнее</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          </div>
        )
      })
      }
    </Swiper>
  </div>
}

export { Carousel }