'use client'
import logo from "@images/logo.jpg"
import Image from 'next/image'
import Nav from './common/nav'
import Link from "next/link"
import {Navigation} from './common/Navigation'
import { useSession } from 'next-auth/react'

type navItem = {
  label: string
  href: string
}

const navItems = [
  {label: "Главная", href: "/"},
  {label: "Католог", href: "/catalog"},
  {label: "Доставка", href: "/order"},
  {label: "Конткты", href: "/about"},
  {label: "Вход", href: "/auth"},
]



export default function Header(props: any) {

  //const session = useSession()

  //console.log(session)

  return (
    <div className="p-2 bg-white">
      <div className="flex gap-0 justify-between items-center">
        <div className="flex">
          <Image width={49} height={40} className="" src={logo} alt="logo" />
        </div>
        <Navigation navlinks={navItems}></Navigation>
        
      </div>
    </div>
  )
}