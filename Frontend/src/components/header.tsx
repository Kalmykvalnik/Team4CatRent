import logo from "@images/logo.jpg"
import Image from 'next/image'
import Nav from './common/nav'
import Link from "next/link"


export default function Header(props: any) {
  return (
    <div className="p-2 bg-white">
      <div className="flex gap-0 justify-between items-center">
        <div className="flex">
          <Image width={49} height={40} className="" src={logo} alt="logo" />
        </div>
        <Nav></Nav>
        <Link href="/login/" className="hover:underline w-24">Вход</Link>
      </div>
    </div>
  )
}