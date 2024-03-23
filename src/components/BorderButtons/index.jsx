import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const BorderButton = ({ name }) => {
    const [selectedButtonName, setSelectedButtonName] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = (buttonName) => {
        setSelectedButtonName(buttonName === selectedButtonName ? null : buttonName);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        backgroundColor: selectedButtonName === name ? 'black' : (isHovered ? 'black' : 'transparent'),
        color: selectedButtonName === name || isHovered ? 'white' : 'black',
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(name)}
        >
            {name}
        </Button>
    );
}

export default BorderButton;
