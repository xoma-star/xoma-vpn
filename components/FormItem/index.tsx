import {ReactNode} from "react";

interface props{
    status?: 'default' | 'error' | 'success',
    message?: string,
    children?: ReactNode
}

const FormItem = ({status, message, children}: props) => {
    return <div className={'text-left gap-6'}>
        {children}
        {status === 'error' && <div className={'text-red-600 mt-3'}>{message}</div>}
        {status === 'success' && <div className={'text-green-600 mt-3'}>{message}</div>}
    </div>
}

export default FormItem