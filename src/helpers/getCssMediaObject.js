import { css } from 'styled-components';

export const SCREEN_SIZES = {
  sm: 600
};

export const getCssMediaObject = media => {
  return Object.keys(SCREEN_SIZES).reduce((accumulator, label) => {
    const defaultSize = SCREEN_SIZES[label];
    const userSize = parseInt(media[label]);
    const pxSize = !isNaN(userSize) ? userSize : defaultSize;

    const emSize = pxSize / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  }, {});
};
