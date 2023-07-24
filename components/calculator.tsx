'use client'
import { ChangeEvent, KeyboardEvent, useState } from "react";

const Calculator: React.FC = () => {
    const [history, setHistory] = useState<Array<any>>([])
    const [number, setNumber] = useState<any>()

    const onClickNumber = (value: any) => {
        let x = number + value
        setNumber(x)
    }

    const onDeleteNumber = () => {
        setHistory((arr) => (arr.slice(0, -1)))
    }

    const onOperator = (op: string) => {
        setNumber(0)
        setHistory([...history, number, op])
    }

    const onCalculator = () => {
        setNumber(0)
        setHistory([...history, number])
    }

    const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
        setNumber(evt.target.value)
    }

    const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Backspace') {
            return
        }

        if (evt.key === '+' || evt.key === '-' || evt.key === '×' || evt.key === '÷') {
            setHistory([...history, number, evt.key])
            setNumber(0)
        }

        if (evt.key === '=') {
            setHistory([...history, number, evt.key])
        }

        if (!/^[0-9]$/.test(evt.key)) {
            evt.preventDefault()
        }
    }

    return (
        <div className="h-full mt-5">
            <div className="flex w-full mx-2">
                <div className="w-1/2 h-full border-2 border-indigo-500">
                    <input className="w-full bg-indigo-200" type="text" value={number} onChange={handleChangeValue} pattern="[0-9+-×÷]*" onKeyDown={handleKeyDown}/>
                </div>
                <div className="w-1/2 h-auto pl-5">
                    [History]
                    {history.map((v, i)=> {
                        return <div key={i}>{v}</div>
                    })}
                </div>
            </div>
            <div className="flex w-1/2 mx-2">
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(1)}>1</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(2)}>2</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(3)}>3</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onOperator('+')}>+</button>
            </div>
            <div className="flex w-1/2 mx-2">
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(4)}>4</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(5)}>5</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(6)}>6</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onOperator('-')}>-</button>
            </div>
            <div className="flex w-1/2 mx-2">
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(7)}>7</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(8)}>8</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(9)}>9</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onOperator('×')}>×</button>
            </div>
            <div className="flex w-1/2 mx-2">
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber('.')}>.</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onClickNumber(0)}>0</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onDeleteNumber()}>del</button>
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onOperator('÷')}>÷</button>
            </div>
            <div className="flex w-1/2 mx-2">
                <button className="w-full p-5 bg-indigo-300 hover:bg-indigo-400" onClick={() => onCalculator()}>=</button>
            </div>
        </div>
    )
}

export default Calculator