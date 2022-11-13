import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Head from "next/head";
import Title from "../components/Title";
import Form from "../components/Form";
import FormItem from "../components/FormItem";
import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [phone, setPhone] = useState<number>()
    const clickHandler = async () => {
        await axios.post('http://localhost:5000/auth/getVerificationCode', {phone: phone})
    }


    return <div className={'h-[100vh] w-full bg-black'}>
        <Head>
            <title>Вход</title>
        </Head>
        <Navbar/>
        <div className={'px-8 flex flex-col gap-8 items-stretch text-center h-full text-white justify-center md:items-center'}>
            <Form
                header={'Авторизация'}
                message={<div>Вы не зарегистрированы. Чтобы зарегистрироваться, отправьте {<u><a href={'https://t.me/xomavpn_bot'}>боту</a></u>} код {<u>1244412</u>}</div>}
            >
                <FormItem><Input label={'Номер телефона'} type={'phone'} onChange={(e) => setPhone(parseInt(e))}/></FormItem>
                {/*<FormItem><Input label={'Код подтверждения'} type={'number'}/></FormItem>*/}
                <Button onClick={clickHandler}>Войти</Button>
            </Form>
        </div>
    </div>
}

export default Login