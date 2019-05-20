import React from 'react';

const ErrorMessage = ({message}) => {
    if (message) {
        const errorStyle = {
            color: 'red',
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        return(
            <div style={errorStyle}>
                {message}
            </div>
        )
    }
    return (
        <div></div>
    )
}


export default ErrorMessage