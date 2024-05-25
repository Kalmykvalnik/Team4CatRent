"use client"
import banner from "@images/banner.jpg"
import Image from 'next/image';
import { Carousel } from '@components/common/carousel'

import cat0001 from "@images/banner.jpg"
import React from 'react';
import ProductCard from '@components/common/productCard';



const mainCat1 = [
  {
    name: "Близнецы",
    shortDescription: "Ласковая и игривая парочка которая не заставит вас скучать",
    imgPrew: "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
  },

  {
    name: "Добряк",
    shortDescription: "Большой и добрый мэйн-кун скрасит ваши выходные",
    imgPrew: "https://t3.ftcdn.net/jpg/02/36/99/22/240_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg"
  },
  {
    name: "Красотка",
    shortDescription: "Кокетка захватит ваше сердце и не оставит равнодушным никого",
    imgPrew: "https://t3.ftcdn.net/jpg/02/97/99/50/240_F_297995004_KIRJlI4JXoOGdnk6fj8NMTC9Xvt7b5Im.jpg"
  }
]

const products = [
  {
    imageUrl: "/img/catalog/дед.jpg",
    productName: "Дед",
  },
  {
    imageUrl: "/img/catalog/лапки.jpg",
    productName: "Шалун",
  },
  {
    imageUrl: "/img/catalog/презрение.jpg",
    productName: "Моряк",
  },
  {
    imageUrl: "/img/catalog/рыжий.jpg",
    productName: "Тиша",
  },
  {
    imageUrl: "/img/catalog/сиамский.jpg",
    productName: "Софа",
  },
  {
    imageUrl: "/img/catalog/странный.jpg",
    productName: "Гроза",
  }
];

export default function Home() {

  const handleSelect = () => {
    console.log('Товар выбран!');
  };

  return (
    <div className="App">
      <main className="">
        <div className="flex min-h-screen flex-col">
          <div className=" w-full">
            <div className="m-0">
              <Image className="object-cover w-full" src={banner} alt="banner" />
            </div>
            <div>
              <h1 className="text-center my-5 text-2xl">Уникальное предложение</h1>
            </div>
            <hr className="w-5/6 mx-auto border-black" />
            <br />
            <br />
            <div className="flex justify-center gap-6">
              <Carousel catsShortInfo={mainCat1}></Carousel>
            </div>
            <br />
            <hr className="w-5/6 mx-auto border-black" />
            <div>
              <h1 className="text-center my-5 text-2xl">Каталог котиков</h1>
              <hr className="w-5/6 mx-auto border-black" />
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-16 my-8">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    imageUrl={product.imageUrl}
                    productName={product.productName}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
