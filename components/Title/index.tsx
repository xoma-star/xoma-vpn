import React from "react";

interface props{
    size?: 's' | 'm' | 'l',
    children: React.ReactNode,
    className?: string
}

const Title = ({size, children, className}: props) => {
    if(size === 's') return <h3 className={'text-2xl font-semibold ' + (className || '')}>{children}</h3>
    if(size === 'm') return <h3 className={'text-4xl font-bold ' + (className || '')}>{children}</h3>
    if(size === 'l') return <h3 className={'text-4xl font-bold ' + (className || '')}>{children}</h3>
    return <h3 className={className}>{children}</h3>
}

export default Title