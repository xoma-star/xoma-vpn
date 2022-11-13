import {ReactNode} from "react";
import Title from "../Title";

interface props{
    children?: ReactNode,
    header?: string,
    message?: ReactNode
}

const Form = ({children, header, message}: props) => {
    return <div className={'flex flex-col gap-8 md:max-w-[460px]'}>
        {header && <Title size={'m'}>{header}</Title>}
        {message && <div className={'text-xl'}>{message}</div>}
        {children}
    </div>
}

export default Form