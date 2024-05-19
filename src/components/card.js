import React from 'react';
import styled from 'styled-components';

const width = '125px';
const Height = '100px';

const InputWrapper = styled.div`
    position: absolute;
    min-height: ${Height};
    width: ${width};
    background-color: red;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus-visible {
        color: white;
        border: unset;
        outline: none;
    }
`;

const Card = (props) => {
    return <InputWrapper className="box" type="text" contentEditable draggable="true" {...props} />;
};

export default Card;
