interface props{
    placeholder?: string,
    label?: string,
    type?: 'number' | 'email' | 'password'
}

const Input = ({placeholder, label}: props) => {
    return <div className={'flex flex-row gap-4 items-center justify-between text-white bg-black'}>
        {label && <label className={'text-lg cursor-text'}>{label}</label>}
        <input className={'border-2 border-white px-4 py-2 focus:outline-none bg-black'} placeholder={placeholder || ''}/>
    </div>
}

export default Input