import React, {useEffect, useState} from "react";

interface props{
    message: string | null
}

const Notification = ({message}: props) => {
    const [style, setStyle] = useState<React.CSSProperties>({transform: 'translateY(100px)'})
    useEffect(() => {
        if(message) {
            setStyle({transform: 'translateY(0)'})
            setTimeout(() => setStyle({transform: 'translateY(100px)'}), 5000)
        }
    }, [message])
    return <div style={style} className={'bg-black text-white border-2 py-4 px-8 border-white fixed bottom-3 will-change-transform duration-200'}>
        {message}
    </div>
}

export default Notification