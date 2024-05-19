import { CARD_COLORS } from './colorPallet';

export const getRandomColors = () => {
    return CARD_COLORS[Math.round(Math.random() * (CARD_COLORS.length - 1) + 1)];
};
