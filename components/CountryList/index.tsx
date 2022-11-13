import countries from "./data";
import Image from "next/image";
import Title from "../Title";


const CountryList = () => {
    return <div className={'flex flex-col items-start px-4 w-full'}>
        {countries.map(x =>
            <div className={'flex flex-row gap-6 items-center justify-between w-full'} key={x.name}>
                <div className={'flex flex-row gap-6 items-center'}>
                    <Image className={'object-contain'} src={x.flag} width={64} height={64}/>
                    <Title size={'m'}>{x.name}</Title>
                </div>
                <Title size={'m'} className={'text-green-700'}>45 мс</Title>
            </div>)}
    </div>
}

export default CountryList