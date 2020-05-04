import React from 'react';
import styled from 'styled-components';

const StyledFloatClear = styled.div`
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const FloatClear = ({ children }) => (
  <StyledFloatClear>{children}</StyledFloatClear>
);
