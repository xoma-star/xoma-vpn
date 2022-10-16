import type { NextPage } from 'next'
import Image from 'next/image'
import Header from "../components/Header";
import Head from "next/head";
import MorphicText from "../components/MorphicText";
import Title from "../components/Title";
import Container from "../components/Container";
import Block from "../components/Block";
import TextHighlighted from "../components/TextHighlighted";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return <div className={'flex flex-col text-purple-900 items-center text-xl'}>
        <Head>
            <title>XOMA VPN</title>
        </Head>
        <Navbar className={'absolute top-0 right-0 text-white'}/>
        <div className={'bg-black text-white text-center pb-8 w-full h-[100vh] flex flex-col justify-center relative items-center gap-4'}>
            <Header/>
            <h1 className={'text-7xl font-bold px-4 bg-clip-text text-transparent bg-gradient-to-br from-[#7303c0] via-[#ec38bc] to-[#fdeff9] animate-text-shimmer'}>XOMA VPN</h1>
            <h3 className={'text-xl'}><MorphicText words={['надежный', 'удобный', 'быстрый', 'безопасный', 'легкий', 'приватный']}/> VPN сервис<br/>от Александра Сиротина</h3>
            <div className={'absolute bottom-4'}><Image src={'/arrow-down.svg'} width={60} height={30}/></div>
        </div>
        <div className={'flex flex-col items-center text-center my-12 max-w-[1200px] w-full px-4'}>
            <Title size={'m'}>Зачем использовать VPN</Title>
            <Container className={'mt-12 md:space-x-8'}>
                <Block className={'basis-1/3'}>
                    <Title size={'s'} className={'mb-4'}>Безопасность</Title>
                    <p className={'text-justify'}><TextHighlighted>XOMA VPN</TextHighlighted> отправляет ваш трафик через зашифрованный туннель VPN, поэтому ваши пароли и конфиденциальные данные остаются в безопасности, даже через общедоступные или небезопасные подключения к Интернету.</p>
                </Block>
                <Block className={'basis-1/3'}>
                    <Title size={'s'} className={'mb-4'}>Конфидициальность</Title>
                    <p className={'text-justify'}>Сохраняйте конфиденциальность истории просмотров. <TextHighlighted>XOMA VPN</TextHighlighted> не регистрирует действия пользователей и не передает данные третьим лицам. <TextHighlighted>XOMA VPN</TextHighlighted> позволяет пользоваться Интернетом без слежки.</p>
                </Block>
                <Block className={'basis-1/3'}>
                    <Title size={'s'} className={'mb-4'}>Свобода</Title>
                    <p className={'text-justify'}><TextHighlighted>XOMA VPN</TextHighlighted> разрушает барьеры цензуры в Интернете, позволяя вам получить доступ к любому сайту или содержимому, что особенно актуально в текущее время.</p>
                </Block>
            </Container>
        </div>
        <div className={'text-center flex flex-col items-center px-4'}>
            <Image src={'/World_map_with_points.svg'} width={1200} height={400}/>
            <Title className={'my-8'} size={'l'}>Сервера по всему миру</Title>
            <p className={'text-justify max-w-[600px]'}>У <TextHighlighted>XOMA VPN</TextHighlighted> есть сервера по всему миру. Это гарантирует, что рядом всегда есть сервер с высокой пропускной способностью, независимо от того, откуда вы подключаетесь. Это обеспечивает подключение к VPN с минимальными задержками и наилучшую производительность.</p>
        </div>
        <div className={'text-center px-4'}>
            <Title className={'my-8'} size={'l'}>VPN, который не заблокируют</Title>
            <p className={'text-justify max-w-[600px]'}>
                <del>Windscribe VPN</del>, <del>Nord VPN</del>, <del>Opera VPN</del>, <del>Cloudflare WARP</del>, <del>ExpressVPN</del>.
                Все эти сервисы были заблокированы Роскомнадзором и в России либо не работают, либо работают со сбоями.
                Большим компаниям тяжело оперативно реагировать на блокировку своих серверов, да и после смены сервера, новый IP будет заблокирован в течение нескольких дней.&nbsp;
                <TextHighlighted>XOMA VPN</TextHighlighted> - не настолько крупный сервис, чтобы попасть в поле зрения машины банов.
            </p>
        </div>
        <div className={'text-center px-4'}>
            <Title className={'my-8'} size={'l'}>Доступно на всех платформах</Title>
            <p className={'text-justify max-w-[600px]'}>
                <TextHighlighted>XOMA VPN</TextHighlighted> доступн на всех популярных платформах, таких как IOS, Android, Windows и др.
            </p>
        </div>
        <div className={'mt-8 py-16 bg-black text-white w-full text-center'}>
            <Title size={'l'}>Готовы попробовать XOMA VPN?</Title>
            <button className={'mt-8 border-4 border-white px-4 py-2'}>Вперед!</button>
        </div>
    </div>
}

export default Home
