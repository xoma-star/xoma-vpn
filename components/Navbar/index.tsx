import Link from "next/link";
import Button from "../Button";
import {useState} from "react";

interface props{
    className?: string
}

const Navbar = ({className = ''}: props) => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return <nav className={'w-full z-50 text-lg p-8 text-white absolute top-0 font-semibold ' + className}>
        <div className={'flex-row items-center gap-6 justify-end flex'}>
            <ul className={'flex-row items-center gap-6 justify-end hidden md:flex'}>
                <li className={'hover:underline'}><Link href={'/'}>Главная</Link></li>
                <li className={'hover:underline'}><Link href={'/pricing'}>Тарифы</Link></li>
                <li className={'hover:underline'}><Link href={'/servers'}>Сервера</Link></li>
                <li className={'hover:underline'}><Link href={'/restore'}>Восстановить покупки</Link></li>
                <Link href={'/login'}><li><Button>Войти</Button></li></Link>
            </ul>
            <Button onClick={() => setMobileMenu(x => !x)} className={'block md:hidden z-30'}>Меню</Button>
        </div>
        {mobileMenu && <div className={'fixed w-full h-full bg-black text-white left-0 top-0 px-8 text-4xl'}>
            <ul className={'flex-col items-start gap-6 justify-center flex text-white h-full'}>
                <li><Link href={'/'}>Главная</Link></li>
                <li><Link href={'/pricing'}>Тарифы</Link></li>
                <li><Link href={'/servers'}>Сервера</Link></li>
                <li><Link href={'/restore'}>Восстановить покупки</Link></li>
                <Link href={'/login'}><li><Button>Войти</Button></li></Link>
            </ul>
        </div>}
    </nav>
}

export default Navbar