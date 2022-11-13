import Navbar from "../components/Navbar";
import Title from "../components/Title";
import CountryList from "../components/CountryList";
import Head from "next/head";

const Servers = () => {
    return <div className={'w-full h-[100vh] bg-black'}>
        <Head>
            <title>Сервера</title>
        </Head>
        <Navbar/>
        <div className={'text-white h-full flex flex-col gap-8 items-center justify-center px-4 md:max-w-7xl md:m-auto'}>
            <Title size={'l'}>Доступные сервера</Title>
            <Title size={'s'}>Вы можете выбрать ближайший к вам сервер. Тогда работа сервиса будет еще лучше!</Title>
            <CountryList/>
        </div>
    </div>
}

export default Servers