import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CustomFlexBox = FlexBox.extend`
  flex-wrap: wrap;
  justify-content: auto;
  align-items: auto;
`;
