import logo from "@images/logo_gray.jpg"
import Image from 'next/image';

export default function Footer(props: any) {
  return (
    <div className="bg-[#D9D9D9] flex p-2 bottom-0">
      <div className="footer__logo">
        <Image height={90} className="footer__logo bg-transparent" src={logo} alt="logo" />
      </div>
      <div className="flex w-screen gap-14 justify-center ">
        <button className="hover:underline">Каталог</button>
        <button className="hover:underline">Доставка</button>
        <button className="hover:underline">Контакты</button>
      </div>
      <div className="footer__address w-1/6 text-center">ООО «Котики на дом»<br />+7 (777) 777-77-77<br />г. Москва</div>
    </div>
  )
}