import logo from "@images/logo_gray.jpg"
import Image from 'next/image';
import Nav from './common/nav'

export default function Footer(props: any) {
  return (
    <div className="bg-[#D9D9D9] flex p-2 bottom-0 justify-between">
      <div className="footer__logo">
        <Image height={90} className="footer__logo bg-transparent" src={logo} alt="logo" />
      </div>
        <Nav></Nav>
      <div className="footer__address w-1/ text-center">ООО «Котики на дом»<br />+7 (777) 777-77-77<br />г. Москва</div>
    </div>
  )
}