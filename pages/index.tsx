import type { NextPage } from 'next'
import Head from "next/head";
import MorphicText from "../components/MorphicText";
import Image from "next/image";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Link from "next/link";

const Home: NextPage = () => {
    return <div className={'flex flex-col items-center'}>
        <Head>
            <title>XOMA VPN</title>
        </Head>
        <Navbar/>
        <div className={'bg-black text-white text-center pb-8 w-full h-[100vh] flex flex-col justify-center relative items-center gap-4 relative'}>
            <h1 className={'text-7xl md:text-9xl font-bold px-4 bg-clip-text text-transparent bg-[url("../public/onni-anttoora-5K8RnvDKBr4-unsplash.jpg")]'} style={{backgroundPosition: '100% 21%', backgroundSize: '100%'}}>
                XOMA VPN
            </h1>
            <h3 className={'text-xl'}><MorphicText words={['надежный', 'удобный', 'быстрый', 'безопасный', 'легкий', 'приватный']}/> VPN сервис<br/>от Александра Сиротина</h3>
            <Link href={'/login'}>
                <Button className={'mt-8'}>Попробовать</Button>
            </Link>
            <div className={'absolute bottom-3'}><Image src={'/arrow-down.svg'} alt={'arrow'} width={30} height={30}/></div>
        </div>
        <div className={'px-8'}>
            <div className={'py-16 text-left md:text-left'}>
                <Title className={'py-8'} size={'l'}>Всего 80 р./мес.</Title>
                <p className={'md:text-5xl text-3xl'}>Платите 80 рублей раз в месяц. Больше никаких дополнительных сборов и комиссий.</p>
            </div>
            <div className={'py-16 text-left md:text-right'}>
                <Title className={'py-8'} size={'l'}>Сервера за границей</Title>
                <p className={'md:text-5xl text-3xl'}>Используйте заблокированные сервисы как прежде. Instagram, Twitter, Facebook, LinkedIn</p>
            </div>
            <div className={'py-16 text-left md:text-left'}>
                <Title className={'py-8'} size={'l'}>Гигабитный порт</Title>
                <p className={'md:text-5xl text-3xl'}>Высокая скорость и стабильность соединения. Смотрите стримы без провисаний. Загрузки файлов без ограничей. Что уж говорить о простом серфинге.</p>
            </div>
            <div className={'py-16 text-left md:text-right'}>
                <Title className={'py-8'} size={'l'}>Скройтесь от посторонних глаз</Title>
                <p className={'md:text-5xl text-3xl'}>Трафик, проходящий через VPN шифруется, а ваш IP недоступен внешним сайтам. Мошенникам будет сложнее вас отследить, а ваши данные будут в безопасности.</p>
            </div>
            <div className={'py-16 text-left md:text-left'}>
                <Title className={'py-8'} size={'l'}>Безопасный Интернет за пару секунд</Title>
                <p className={'md:text-5xl text-3xl'}>Подключитесь к VPN нажатием на один переключатель и забудьте о нем. XOMA VPN сам сделает ваше использование интернета безопасным.</p>
            </div>
            <div className={'py-16 text-left md:text-right'}>
                <Title className={'py-8'} size={'l'}>Можно использовать на всех устройствах</Title>
                <p className={'md:text-5xl text-3xl'}>XOMA VPN доступен для всех популярных платформ, включая телефоны, планшеты, компьютеры и другие девайсы.</p>
            </div>
        </div>
        <div className={'bg-black text-white text-center py-20 px-8 w-full flex flex-col justify-center relative items-center gap-4 relative'}>
            <Title size={"m"}>Готовы попробовать XOMA VPN?</Title>
            <Link href={'/login'}>
                <Button className={'mt-8'}>Попробовать</Button>
            </Link>
        </div>
    </div>
}

export default Home
