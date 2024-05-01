import banner from "@images/banner.jpg"
import Image from 'next/image';
import {Carousel} from '@components/common/carousel'

import cat0001 from "@images/banner.jpg"



const mainCat1 = [
{
  name: "Близнецы",
  shortDescription: "Ласковая и игривая парочка которая не заставит вас скучать",
  imgPrew: ""
},

{
  name: "Добряк",
  shortDescription: "Большой и добрый мэйн-кун скрасит ваши выходные",
  imgPrew: ""
},
{
  name: "Красотка",
  shortDescription: "Кокетка захватит ваше сердце и не оставит равнодушным никого",
  imgPrew: ""
}
]
export default function Home() {
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
        </div>
      </div>
    </main>
  );
}
