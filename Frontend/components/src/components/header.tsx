import logo from "@images/logo.jpg"
import banner from "@images/banner.jpg"
import Image from 'next/image'
import Nav from './common/nav'
import Link from "next/link"


export default function Header(props: any) {
  return (
    <div className="p-2 bg-white">
      <div className="flex gap-0 justify-between">
        <div className="">
          <Image width={49} height={40} className="" src={logo} alt="logo" />
        </div>
        <Nav></Nav>
        <Link href="/login/" className="hover:underline w-24">Вход</Link>
      </div>
      <div className="gap-4">
        <Image className="object-cover w-full" src={banner} alt="banner" />
      </div>
    </div>
  )
}