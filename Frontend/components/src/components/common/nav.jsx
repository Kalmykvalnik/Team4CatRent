import Link from "next/link"

export default function Nav() {
  return <nav>
    <div className="flex gap-14 justify-center ">
      <Link href="/catalog/" className="hover:underline">Каталог</Link>
      <Link href="/order/" className="hover:underline">Доставка</Link>
      <Link href="/about/" className="hover:underline">Контакты</Link>
    </div>
  </nav>
}


