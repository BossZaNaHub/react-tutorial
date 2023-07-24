interface IChildProps {
    data: any
    send: any
}

const ChildComponent: React.FC<IChildProps> = ({ data, send }) => {
    const sendEvent = () => {
        data(100)
    }

    return (
        <div>
            <p>Parent Data</p>
            {send}
            <br/>
            <button onClick={() => sendEvent()}>Send</button>
        </div>
    )
}

export default ChildComponent