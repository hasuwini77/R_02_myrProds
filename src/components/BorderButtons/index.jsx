import React from 'react';
import { Button } from 'react-bootstrap';
const BorderButton = ({ children, onClick, active }) => {

    const buttonStyle = {
        backgroundColor: active ? 'black' : 'white',
        color: active ? 'white' : 'black',
        borderColor: 'black',
        borderRadius: '5px',
        marginBottom: '10px',
        marginRight: '12px',
        transition: 'background-color 0.3s, color 0.3s',
    };

    return (
        <Button
            variant="outline-dark"
            style={buttonStyle}
            onClick={onClick}>
            {children}
        </Button>
    );
}

export default BorderButton;