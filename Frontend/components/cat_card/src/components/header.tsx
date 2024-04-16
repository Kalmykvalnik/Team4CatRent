import logo from "@/images/logo.jpg"
import banner from "@/images/banner.jpg"
import Image from 'next/image';


export default function Header(props: any) {
    return (
        <div className="p-2 gap-4">
            <div className="flex gap-4">
                <div className="header__logo gap-4">
                    <Image width={55} height={45} className="object-cover align-middle" src={logo} alt="logo"/>
                </div>
                <div className="flex w-screen gap-4">
                    <div className="header-menu__item">Каталог</div>
                    <div className="header-menu__item">Доставка</div>
                    <div className="header-menu__item">Контакты</div>
                </div>
                <div className="sing-in">Вход</div>
            </div>
            <div className="gap-4">
            <Image className="object-cover w-full" src={banner} alt="banner"/>
            </div>
        </div>
    )
}