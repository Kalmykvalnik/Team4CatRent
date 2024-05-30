import banner from "@images/banner.jpg"
import Image from 'next/image';
import { GetProducts } from '@/actions/getProduct'
import Link from "next/link"
import CatMiniCard from "@/components/common/catMiniCard";
import { britanskaya_koshka, catImg } from "@/components/common/britanskaya_koshka";

import { Carousel } from '@/components/common/carousel'

import cardinal from "@images/cardinal.png"

const mainCat1 = [
  {
    name: "Близнецы",
    shortDescription: "Ласковая и игривая парочка которая не заставит вас скучать",
    imgPrew: cardinal
  },

  {
    name: "Добряк",
    shortDescription: "Большой и добрый мэйн-кун скрасит ваши выходные",
    imgPrew: cardinal
  },
  {
    name: "Красотка",
    shortDescription: "Кокетка захватит ваше сердце и не оставит равнодушным никого",
    imgPrew: cardinal
  }
]



export default async function Home() {
  const payload = await GetProducts();

  const cats: catCard[] = Object.assign([], payload)

  return (
    <main className="">
      <div className="">
        <div className=" ">
          <div className="m-0 flex">
            <Image className="object-cover w-full" src={banner} alt="banner" />
          </div>
          <div className="flex justify-center">
            <div className="flex w-[300px]"></div>
            <div className="flex flex-col">
              <div className="h-[100px] m-5 ">
                <h1 className="text-center text-3xl border-b-2 border-black p-5">Уникальное предложение</h1>
              </div>
              <div className="flex justify-center gap-6 m-5">
                <Carousel catsShortInfo={mainCat1}></Carousel>
              </div>
              <div className="h-[100px] m-5">
                <h1 className="text-center text-3xl border-b-2 border-t-2 border-black p-5">Католог котиков</h1>
              </div>
              <div className="flex flex-wrap justify-center gap-10 m-5">
                {cats.map((object: catCard) =>
                  <div className="" key={object.id}>
                    <CatMiniCard id={object.id} name={object.name} imgPrew={catImg[object.id]} description={object.description || 'Default description'} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-[300px]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
