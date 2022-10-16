import Link from "next/link";

interface props{
    className?: string
}

const Navbar = ({className = ''}: props) => {
    return <nav className={'z-50 text-lg p-8 text-purple-900 font-semibold ' + className}>
        <ul className={'flex flex-row gap-6 justify-end'}>
            <li className={'hover:text-fuchsia-500'}><Link href={'/'}>Главная</Link></li>
            <li className={'hover:text-fuchsia-500'}><Link href={'/pricing'}>Тарифы</Link></li>
            <li className={'hover:text-fuchsia-500'}><Link href={'/restore'}>Восстановить покупки</Link></li>
            <li className={'hover:text-fuchsia-500'}><Link href={'/tg'}><button>Купить подписку</button></Link></li>
        </ul>
    </nav>
}

export default Navbar