import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Head from "next/head";

const Profile = () => {
    return <div className={'bg-black w-full min-h-[100vh]'}>
        <Head>
            <title>Управление подпиской</title>
        </Head>
        <Navbar/>
        <div className={'text-white flex flex-col items-center justify-center w-full h-full md:px-20 px-8 gap-24 py-32'}>
            <Title size={'l'}>Управление подпиской</Title>
            <div className={'flex flex-col gap-16'}>
                <Title size={'m'}>На вашем счете <u>20</u> рублей. Этого хватит на <u>3</u> месяца. Следующее списание <u>26 ноя 2022</u>.</Title>
                <div className={'flex w-full flex-row justify-around flex-wrap gap-8'}>
                    <Button className={'md:text-5xl text-3xl border-8 font-bold'}>Пополнить счет</Button>
                </div>
                <Title size={'s'}>Сумма списывается из расчета 80 рублей/месяц. Если на счету недостаточно средств, доступ к VPN будет ограничен. Чтобы отменить подписку просто не пополняйте счет. Деньги, зачисленные на счет не могут быть возвращены.</Title>
            </div>
        </div>
    </div>
}

export default Profile