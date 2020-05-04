import styled from 'styled-components';

export const StyledField = styled.div`
  float: left;
  width: 100%;
  padding: 0 7px 14px;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  &.quarter {
    width: 25%;
  }
  &.third {
    width: 33.3333%;
  }
  &.half {
    width: 50%;
  }
  &.two_thirds {
    width: 66.6666%;
  }
  &.three_quarters {
    width: 75%;
  }

  ${props => props.media.sm`
    &.quarter,
    &.third,
    &.half,
    &.two_thirds,
    &.three_quarters {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  `}
`;
