import Link from "next/link"

export default function Nav() {
  return <nav className="items-center flex">
    <div className="flex gap-14 justify-center ">
      <Link href="/" className="hover:underline">Главная</Link>
      <Link href="/catalog/" className="hover:underline">Каталог</Link>
      <Link href="/order/" className="hover:underline">Доставка</Link>
      <Link href="/about/" className="hover:underline">Контакты</Link>
    </div>
  </nav>
}


