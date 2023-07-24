'use client'

import { Inter } from "next/font/google";
import { CSSProperties, useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Example1() {
    const [declareString, setDeclareString] = useState<string>('MyString');
    const [declareNumber, setDeclareNumber] = useState<number>(10);
    const [position, setPosition] = useState({x: -10, y: 0});
    const [squre, setSqure] = useState<CSSProperties>({background: 'rgb(255,0,0)'})

    const changeStringType = (evt: any) => {
        setDeclareString(evt.target.value)
    }

    const changeNumberType = (evt: any) => {
        const value = evt.target.value
        if (value === "") {
            setDeclareNumber(0)
        }
        
        if (!isNaN(parseFloat(value))) {
            setDeclareNumber(value)
        }
    }

    const changeColor = () => {
        const r = Math.random() * 255
        const g = Math.random() * 255
        const b = Math.random() * 255
        setSqure({background: `rgb(${r},${g},${b})`})
    }

    return (
        <div className="mx-10 my-1">
            <h1>Example 1</h1>
            <desc>function useState</desc>
            <div className="my-10">
                useState {declareString} &nbsp;
                Assing to change state of variable
                <br/>
                <input onChange={(e) => changeStringType(e)} className="my-5 text-red-900" />
            </div>

            <div className="my-10">
                useState {declareNumber} &nbsp;
                Assing to change state of variable
                <br/>
                <input onChange={(e) => changeNumberType(e)} className="my-5 text-red-900" />
            </div>

            <div className="my-10">
                Object
                X: {position.x} &nbsp;
                Y: {position.y}
            </div>

            <div className="mx-2 my-10">
                <div className="w-10 h-10" style={squre}></div>
                <button className="p-2 bg-indigo-400 hover:bg-indigo-500" onClick={() => changeColor()}>Change!</button>
            </div>
        </div>
    )
}