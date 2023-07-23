'use client'
import { Inter } from "next/font/google";
import { useEffect, useMemo, useState } from "react"

const inter = Inter({ subsets: ['latin'] })

const TryCache = ({value}: any) => {
    const cachedValue = useMemo(() => {
        return value
    }, [])

    return (
        <div>
        <p>send {value} &amp; in memo {cachedValue}</p>
        </div>
    )
}

export default function Example2() {
    const [data, setData] = useState(0)
    useEffect(() => {
      return () => {}
    }, [])
    
    const updateValue = () => {
        setData(data + 1)
    }
    
    return (
        <div className="mx-10 my-1">
            <h1>Example 2</h1>
            <div className="my-10">
                useMemo
            </div>
            <button className="p-5 bg-indigo-400" onClick={() => updateValue()}>Update</button>
            <TryCache value={data} />
        </div>
    )
}