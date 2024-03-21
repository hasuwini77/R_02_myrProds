import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './BorderButtons.module.css';

const BorderButton = ({ name }) => {
    const handleMouseEnter = (event) => {
        event.target.classList.add('hovered');
    };

    const handleMouseLeave = (event) => {
        event.target.classList.remove('hovered');
    };

    return (
        <Button
            variant="outline-dark"
            className={`${styles.borderButton} ${styles.marginRight}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {name}
        </Button>
    );
}

export default BorderButton;
