import React, {useEffect, useState} from "react";

interface props{
    placeholder?: string,
    label?: string,
    type?: 'number' | 'email' | 'password' | 'phone',
    defaultValue?: string,
    onChange?(e: string): void
}

const Input = ({placeholder, label, type, defaultValue = '', onChange}: props) => {
    const [value, setValue] = useState<string>(defaultValue)
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value
        if(type === 'phone'){
            const formatted = []
            const digits = val.replace(/\D/g, '').split('').slice(0, 11)
            if(onChange) onChange(digits.join(''))
            if(digits.length > 0) formatted.push('+')
            digits.forEach((x, i) => {
                if(i === 1) formatted.push(' (')
                if(i === 4) formatted.push(') ')
                if([7, 9].indexOf(i) >= 0) formatted.push('-')
                formatted.push(x)
            })
            setValue(formatted.join(''))
        }
        if(type === 'number'){
            setValue(val.replace(/\D/g, ''))
        }
    }

    return <div className={'flex flex-row gap-4 items-center justify-between text-white bg-black flex-wrap'}>
        {label && <label className={'text-lg cursor-text'}>{label}</label>}
        <input onChange={changeHandler} value={value} className={'border-2 border-white px-4 py-2 focus:outline-none bg-black'} placeholder={placeholder || ''}/>
    </div>
}

export default Input