"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navlinks: NavLink[];
}

const Navigation = ({navlinks}: Props) => {
  const pathname = usePathname()

  return <>
    {
      navlinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <Link 
            key= {link.label}
            href={link.href}
            className={isActive ? "text-[#0F57C2] hover:underline underline-offset-4" : "hover:underline underline-offset-4"}
          >
            {link.label}
          </Link>
        )
      })
    }
  </>
};

export {Navigation};