import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/card';
import { getRandomColors } from '../utils/getRandomColors';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
`;

export const Layout = () => {
    const [dragging, setDragging] = useState(false);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const color = getRandomColors();
        setStyle((prev) => ({ ...prev, backgroundColor: color }));
    }, [dragging]);

    const handleDragStart = (e) => {
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const left = `${e.clientX}px`;
        const top = `${e.clientY}px`;
        setStyle({
            top: top,
            left: left,
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    return (
        <Wrapper
            className={`container ${dragging ? 'dragging' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <Card
                className="box"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={style}
            />
        </Wrapper>
    );
};
