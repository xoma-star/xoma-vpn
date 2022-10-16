import type { NextPage } from 'next'
import Head from "next/head";
import MorphicText from "../components/MorphicText";

const Home: NextPage = () => {
    return <div className={'flex flex-col items-center'}>
        <Head>
            <title>XOMA VPN</title>
        </Head>
        <div className={'bg-black text-white text-center pb-8 w-full h-[100vh] flex flex-col justify-center relative items-center gap-4'}>
            <h1 className={'text-7xl font-bold px-4 bg-clip-text text-transparent bg-gradient-to-br from-[#7303c0] via-[#ec38bc] to-[#fdeff9] animate-text-shimmer'}>XOMA VPN</h1>
            <h3 className={'text-xl'}><MorphicText words={['надежный', 'удобный', 'быстрый', 'безопасный', 'легкий', 'приватный']}/> VPN сервис<br/>от Александра Сиротина</h3>
        </div>
        <button className={'absolute bottom-12 text-white border-4 border-white text-xl px-4 py-2'}>
            Попробовать
        </button>
    </div>
}

export default Home
