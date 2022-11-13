import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Profile = () => {
    return <div className={'bg-black w-full h-[100vh]'}>
        <Navbar/>
        <div className={'text-white flex flex-col items-center justify-center w-full h-full px-8 gap-16'}>
            <Title size={'l'}>Добро пожаловать!</Title>
            <div className={'flex flex-col gap-16'}>
                <Title size={'m'}>Ваша подписка оплачена до 20 ноября</Title>
                <div className={'flex w-full flex-row justify-around flex-wrap gap-8'}>
                    <Button>Продлить</Button>
                    <Button>Отменить подписку</Button>
                </div>
            </div>
        </div>
    </div>
}

export default Profile