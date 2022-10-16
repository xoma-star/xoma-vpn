import {NextPage} from "next";
import Container from "../components/Container";
import Block from "../components/Block";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import TextHighlighted from "../components/TextHighlighted";

const Pricing: NextPage = () => {

    return <div className={'text-purple-900'}>
        <Navbar/>
        <div className={'flex flex-col text-center items-center'}>
            <Title className={'my-8'} size={'l'}>Выберите подходящий план</Title>
            <div className={'flex flex-row gap-8 w-full max-w-[1200px]'}>
                <Container>
                    <Block className={'flex flex-col justify-between'}>
                        <div>
                            <Title size={'m'} className={'mb-4'}>Бесплатный</Title>
                            <p className={'text-xl mb-4'}>Подойдет, чтобы попробовать сервис</p>
                            <ul className={'flex flex-col list-disc text-left p-4'}>
                                <li>Ограничение трафика 500 МБ / месяц</li>
                            </ul>
                        </div>
                        <button className={'border-purple-900 border-2'}>Попробовать</button>
                    </Block>
                    <Block className={'flex flex-col justify-between'}>
                        <div>
                            <Title size={'m'} className={'mb-4'}>Простой</Title>
                            <p className={'text-xl mb-4'}>Чтобы зайти в Инстаграм раз в день</p>
                            <ul className={'flex flex-col list-disc text-left p-4'}>
                                <li>Доступ к одному серверу</li>
                                <li>Без ограничений по скорости</li>
                                <li>Без ограничений по трафику</li>
                                <li>1 подключенное устройство</li>
                            </ul>
                            <Title className={'mb-4'} size={'s'}>80 р./мес.</Title>
                        </div>
                        <button className={'border-purple-900 border-2'}>Подключить</button>
                    </Block>
                </Container>
                <Container className={'scale-110'}>
                    <Block className={'flex flex-col justify-between'}>
                        <Title size={'m'} className={'mb-4'}>Полный фарш</Title>
                        <p className={'text-xl mb-4'}>Максимум от <TextHighlighted>XOMA VPN</TextHighlighted></p>
                        <ul className={'flex flex-col list-disc text-left p-4'}>
                            <li>Доступ ко всем серверам</li>
                            <li>Без ограничений по скорости</li>
                            <li>Без ограничений по трафику</li>
                            <li>До 5 подключенных устройств</li>
                        </ul>
                        <Title className={'mb-4'} size={'s'}>240 р./мес.</Title>
                        <button className={'border-purple-900 border-2'}>Подключить</button>
                    </Block>
                </Container>
            </div>
        </div>
    </div>
}

export default Pricing