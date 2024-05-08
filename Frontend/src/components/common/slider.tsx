'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { britanskaya_koshka } from '@/components/common/britanskaya_koshka'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Gallery() {
  return (
    <div className="container w-80" >
      <Swiper
        navigation
        pagination={{ type: 'fraction' }}
        modules={[Navigation, Pagination]}
        className="h-80 w-full rounded-md"
      >
        {britanskaya_koshka.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={305}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}