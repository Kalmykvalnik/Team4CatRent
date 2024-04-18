import logo from "@images/logo.jpg"
import banner from "@images/banner.jpg"
import Image from 'next/image';


export default function Header(props: any) {
  return (
    <div className="p-2 bg-white">
      <div className="flex gap-0">
        <div className="">
          <Image width={49} height={40} className="" src={logo} alt="logo" />
        </div>
        <div className="flex w-screen gap-14 justify-center ">
          <button className="hover:underline">Каталог</button>
          <button className="hover:underline">Доставка</button>
          <button className="hover:underline">Контакты</button>
        </div>
        <button className="hover:underline w-24">Вход</button>
      </div>
      <div className="gap-4">
        <Image className="object-cover w-full" src={banner} alt="banner" />
      </div>
    </div>
  )
}