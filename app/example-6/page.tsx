'use client'
import { useState, useEffect } from "react"
import useSWR from 'swr'
import axios, { AxiosRequestConfig } from 'axios'

interface PokeInput {
    count: number,
    next: string,
    previous: string,
    results: Array<any>
}

const fetcher = (url: AxiosRequestConfig<any>) => axios(url).then(r => r.data)

const Example6: React.FC = () => {
    const [pokeData, setPokeData] = useState<PokeInput>()
    const { data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon`, fetcher)

    useEffect(() => {
      const pokeApi = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        if (!response.ok) {
            alert(`HTTP error! status: ${response.status}`)
        } else {
            const result: PokeInput = await response.json()
            console.log(result)
            setPokeData(result)
        }
      }
    
      pokeApi().catch((err) => {
        console.error('An error occurred while fetching the data: ', err)
      })
      return () => {}
    }, [])

    if (error) return <div>failed to load</div>
    console.log('data:', data)
    return (
    <div>
        <h1>Example 6</h1>
        <desc>API Request &amp; SWR Plugins</desc>

        <pre>API Request</pre>
        <ul>
            {pokeData?.results.map((v, i) => {
                return <li key={i}><a href={v.url}>{v.name}</a></li>
            })}
        </ul>
        <br/>
        <pre>SWR</pre>
        {isLoading? 
            (
            <div>loading...</div>
            ): (<ul>{data.results.map((v: any, i: number) => <li key={i}>{v.name}</li>)}</ul>)
        }
    </div>
    )
}

export default Example6