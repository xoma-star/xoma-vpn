import {NextPage} from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

const Pricing: NextPage = () => {

    return <div className={'flex flex-col items-center bg-black min-h-[100vh]'}>
        <Head>
            <title>Тарифы</title>
        </Head>
        <Navbar/>
        <div className={'px-8 py-40 items-center flex flex-row flex-wrap gap-40 text-white min-h-[100vh] h-full'}>
            <div className={'basis-1/3'}>
                <Title size={'l'}>Бесплатный</Title>
                <p className={'md:text-5xl text-3xl'}>Подойдет, чтобы попробовать сервис</p>
                <button
                    className={'text-white border-4 border-white text-xl px-4 py-2 mt-12 hover:bg-white hover:text-black duration-300'}
                    onClick={() => window.open('https://t.me/xomavpn_bot')}>
                    Попробовать
                </button>
            </div>
            <div>
                <Title size={'l'}>Все включено</Title>
                <ul className={'md:text-5xl text-3xl'}>
                    <li>Доступ ко всем серверам.</li>
                    <li>Скорость до 1 ГБит/с</li>
                    <li>Безопасный интернет</li>
                    <li>Обход блокировок</li>
                </ul>
                <Title size={'m'}>80 р./мес.</Title>
                <button
                    className={'text-white border-4 border-white text-xl px-4 py-2 mt-12 hover:bg-white hover:text-black duration-300'}
                    onClick={() => window.open('https://t.me/xomavpn_bot')}>
                    Подключить
                </button>
            </div>
        </div>
    </div>
}

export default Pricing