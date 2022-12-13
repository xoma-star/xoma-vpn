import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Head from "next/head";
import Title from "../components/Title";
import Form from "../components/Form";
import FormItem from "../components/FormItem";
import {useEffect, useState} from "react";
import axios from "axios";
import Notification from "../components/Notification";

const Login = () => {
    const [phone, setPhone] = useState<number>()
    const [status, setStatus] = useState<0 | 1>(0)
    const [notification, setNotification] = useState<null | string>(null)
    useEffect(() => {
        if(notification) setTimeout(() => setNotification(null), 5500)
    }, [notification])
    const clickHandler = async () => {
        axios.post('http://localhost:5000/auth/login', {phone: phone})
            .then((d) => {
                setStatus(1)
                axios.post('http://localhost:5000/auth/verify', {id: d.data})
            })
            .catch(r => {
                if(r?.response?.status === 404) window.open('https://t.me/xomavpn_bot')
                else setNotification(r?.response?.data || 'Неизвестная ошибка')
            })
    }


    return <div className={'h-[100vh] w-full bg-black'}>
        <Head>
            <title>Вход</title>
        </Head>
        <Navbar/>
        <div className={'px-8 flex flex-col gap-8 items-stretch text-center h-full text-white justify-center md:items-center'}>
            <Form
                header={'Авторизация'}
            >
                {status === 0 && <FormItem><Input label={'Номер телефона'} type={'phone'} onChange={(e) => setPhone(parseInt(e))}/></FormItem>}
                {status === 1 && <FormItem>Подтверждение отправлено ботом в телеграм. Страница автоматически обновится.</FormItem>}
                {status === 0 && <Button onClick={clickHandler}>Войти</Button>}
                {status === 1 && <Button onClick={() => setStatus(0)}>Назад</Button>}
            </Form>
        </div>
        <Notification message={notification}/>
    </div>
}

export default Login