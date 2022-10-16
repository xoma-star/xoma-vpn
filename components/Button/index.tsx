interface props{
    children: string,
    mode?: 'primary' | 'secondary' | 'tertiary',
    size?: 's' | 'm'
}

const Button = ({children, mode = 'primary'}: props) => {
    let classNames = ['px-4', 'py-2', 'rounded-full', 'hover:scale-110', 'duration-200']
    switch (mode){
        case 'primary':
            classNames = [...classNames, 'bg-gradient-to-br', 'from-[#FDABDD]', 'to-[#374A5A]', 'text-rose-50']
            break
        case 'tertiary':
            classNames = [...classNames, 'text-[#374A5A]']
            break
    }

    return <button className={classNames.join(' ')}>{children}</button>
}

export default Button