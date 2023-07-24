'use client'
import ChildComponent from "@/components/child"
import { useState } from "react"

const Example5: React.FC = () => {
    const [data, setData] = useState()

    const handleClick = (event: any) => {
        setData(event)
    }

    return (
        <>
            <h1>Example 5</h1>
            <br/>
            <desc>Send Props from parent to child</desc>
            <ChildComponent data={handleClick} send={50} />
            <br/><br/>
            <desc>Send Props from child to parent</desc>
            <p>retrive from child: {data}</p>
        </>
    )
}

export default Example5
