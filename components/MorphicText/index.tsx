import {useEffect, useState} from "react";

interface props{
    words: string[]
}

const MorphicText = ({words}: props) => {
    const [i, set] = useState<number>(0)
    const width = Math.max(...words.map(x => x.length)) * 12
    useEffect(() => {
        const interval = setInterval(() => set(x => x + 1), 4000)

        return () => clearInterval(interval)
    }, [words])

    return <span className={`relative inline-block text-center`} style={{width}}>
        {words.map((_, k) => {
            if(k === i % words.length) return <div key={`in${k}`} style={{width}} className={'absolute animate-text-out'}>{words[k]}</div>
            if(k === (i + 1) % words.length) return <div key={`${k}out`} style={{width}} className={'absolute animate-text-in'}>{words[k]}</div>
        })}
        <div className={'opacity-0'}>...</div>
    </span>
}

export default MorphicText