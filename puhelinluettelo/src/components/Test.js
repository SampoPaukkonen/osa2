import React, {useState} from 'react';

const Test = () => {
    //Setting up message
    const [message, setMessage] = useState('')
    //Change the state of message to Testing after 6 seconds
    setTimeout(() => {setMessage("Testing")}, 6000)
    return (
        <div></div>
    )
}

export default Test