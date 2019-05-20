import React from 'react';

const Message = ({message}) => {
    if (message) {
        const messageStyle = {
            color: 'green',
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        return(
            <div style={messageStyle}>
                {message}
            </div>
        )
    }
    return (
        <div></div>
    )
}


export default Message