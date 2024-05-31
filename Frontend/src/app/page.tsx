import banner from "@images/banner.jpg"
import Image from 'next/image';
import { GetProducts } from '@/actions/getProduct'
import Link from "next/link"
import CatMiniCard from "@/components/common/catMiniCard";
import { catImg } from "@/components/common/img";

import { Carousel } from '@/components/common/carousel'

import asign from '@/actions/asign'

const mainCat1: catCard[] = [
  {
    id: 5,
    name: "Близнецы",
    description: "Ласковая и игривая парочка которая не заставит вас скучать",
    src: '/_next/static/media/cat0005.7cdceb7e.jpg'
  },

  {
    id:2,
    name: "Добряк",
    description: "Большой и добрый мэйн-кун скрасит ваши выходные",
    src: '/_next/static/media/cat0002.a51884a2.jpg'
  },
  {
    id:4,
    name: "Красотка",
    description: "Кокетка захватит ваше сердце и не оставит равнодушным никого",
    src: '/_next/static/media/cat0004.a8a0555d.png'
  }
]



export default async function Home() {
  const payload = await GetProducts();

  const cats2 = asign(payload, catImg)

  return (
    <main className="">
      <div className="">
        <div className=" ">
          <div className="m-0 flex">
            <Image className="object-cover w-full" src={banner} alt="banner" />
          </div>
          <div className="flex justify-center m-5">
            <div className="flex w-[300px]"></div>
            <div className="flex flex-col min-w-0">
              <div className="h-[100px] m-5 ">
                <h1 className="text-center text-3xl border-b-2 border-black p-5">Уникальное предложение</h1>
              </div>
              <div className="flex justify-center min-w-0 gap-6 m-5">
                <Carousel catsShortInfo={mainCat1}></Carousel>
              </div>
              <div className="h-[100px] m-5">
                <h1 className="text-center text-3xl border-b-2 border-t-2 border-black p-5">Католог котиков</h1>
              </div>
              <div className="flex flex-wrap justify-center gap-10 m-5">
                {cats2.map((object: catCard) =>
                  <div className="max-w-[300px] max-h-[300px]" key={object.id}>
                    <CatMiniCard id={object.id} name={object.name} src={object.src}  description={object.description || 'Default description'} />
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
