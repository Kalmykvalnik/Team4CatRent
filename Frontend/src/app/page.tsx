import banner from "@images/banner.jpg"
import Image from 'next/image';
import {Carousel} from '@components/common/carousel'

import cat0001 from "@images/banner.jpg"



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
