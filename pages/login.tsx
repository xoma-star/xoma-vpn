import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Head from "next/head";

const Login = () => {
    return <div className={'h-[100vh] w-full bg-black'}>
        <Head>
            <title>Вход</title>
        </Head>
        <Navbar/>
        <div className={'px-8 flex flex-col gap-8 items-stretch text-center h-full text-white justify-center md:items-center'}>
            <div className={'flex flex-col gap-8 md:w-80'}>
                <Input label={'Почта'}/>
                <Input label={'Пароль'}/>
            </div>
            <div className={'flex flex-row gap-8 items-stretch md:w-80 justify-between'}>
                <Button>Войти</Button>
                <Button>Регистрация</Button>
            </div>
        </div>
    </div>
}

export default Login