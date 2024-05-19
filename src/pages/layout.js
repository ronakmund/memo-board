import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/card';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
`;

const CardWrapper = styled.div`
    position: absolute;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
`;

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const NewCardWrapper = styled(CardWrapper)`
    animation: ${fadeInAnimation} 0.1s ease-in-out;
`;

const initialPosition = {
    top: '100px',
    left: '100px',
    isTouched: false,
};

export const Layout = () => {
    const [cards, setCards] = useState([{ id: 1, position: initialPosition }]);
    const [draggedCard, setDraggedCard] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const cardIndex = cards.findIndex((card) => card.id === parseInt(cardId));
        if (cardIndex !== -1) {
            const newCards = [...cards];
            const newPosition = {
                top: `${e.clientY}px`,
                left: `${e.clientX}px`,
                isTouched: true,
            };
            newCards[cardIndex].position = newPosition;
            setCards(newCards);
            if (cardIndex === cards.length - 1) {
                const newCardId = cards.length + 1;
                setCards([...newCards, { id: newCardId, position: initialPosition }]);
            }
        }
        setDraggedCard(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        if (draggedCard) {
            const newPosition = {
                top: `${e.clientY}px`,
                left: `${e.clientX}px`,
                isTouched: true,
            };
            const newCards = cards.map((card) => {
                if (card.id === draggedCard.id) {
                    return { ...card, position: newPosition };
                }
                return card;
            });
            setCards(newCards);
        }
    };

    return (
        <Wrapper onDrop={handleDrop} onDragOver={handleDragOver}>
            {cards.map((card) => (
                <NewCardWrapper
                    key={card.id}
                    style={card.position}
                    visible={!card.position.isTouched} // Only show animation for newly added cards
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData('cardId', card.id);
                        setDraggedCard(card);
                    }}
                >
                    <Card />
                </NewCardWrapper>
            ))}
            {cards.map((card) => (
                <CardWrapper
                    key={card.id}
                    style={card.position}
                    visible={card.position.isTouched} // Hide animation for dragged cards
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData('cardId', card.id);
                        setDraggedCard(card);
                    }}
                >
                    <Card />
                </CardWrapper>
            ))}
        </Wrapper>
    );
};
