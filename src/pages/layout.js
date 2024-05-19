import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/card';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
`;

export const Layout = () => {
    const [position, setPosition] = useState({});

    const handleDrop = (e) => {
        e.preventDefault();

        const left = `${e.clientX}px`;
        const top = `${e.clientY}px`;
        setPosition({
            top: top,
            left: left,
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    return (
        <Wrapper onDrop={handleDrop} onDragOver={handleDragOver}>
            <Card className="box" style={position} />
        </Wrapper>
    );
};
