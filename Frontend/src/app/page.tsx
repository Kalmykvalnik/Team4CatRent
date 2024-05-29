import banner from "@images/banner.jpg"
import Image from 'next/image';
import { GetProducts } from '@/actions/getProduct'
import Link from "next/link"


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

  return (
    <main className="">
      <div className="flex h-screen ">
        <div className=" w-full">
          <div className="m-0">
            <Image className="object-cover w-full" src={banner} alt="banner" />
          </div>
          <div>
            <h1 className="text-center">Уникальное предложение</h1>
          </div>
          <div className="flex justify-center gap-6">
            <Carousel catsShortInfo={mainCat1}></Carousel>

          </div>
          <div>
            {payload.map((object: Product) =>
              <li key={object.id}>
                <Link href={`/catalog/${object.id}`}>{object.name}</Link>
              </li>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
