import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRandomColors } from '../utils/getRandomColors';

const width = '175px';
const Height = '120px';

const InputWrapper = styled.div`
    position: absolute;
    min-height: ${Height};
    width: ${width};
    background-color: ${(props) => props.color};
    padding: 16px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: cursive;
    font-size: 22px;
    line-height: 28px;
    color: white;
    font-weight: 500;
    text-align: center;
    box-shadow: ${(props) => props.color} 0px 8px 24px;
    &:focus-visible {
        color: white;
        border: unset;
        outline: none;
    }
`;

const Card = (props) => {
    const [randomColor, setColor] = useState({});
    useEffect(() => {
        const color = getRandomColors();
        setColor(color);
    }, []);
    return (
        <InputWrapper
            className="box"
            type="text"
            contentEditable
            draggable="true"
            color={randomColor}
            {...props}
        />
    );
};

export default Card;
