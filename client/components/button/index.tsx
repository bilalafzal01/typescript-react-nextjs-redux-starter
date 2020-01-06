import styled from '@emotion/styled';
import COLOR from '@constants/color';

export const Button = styled.button`
  background-color: ${COLOR.WHITE};
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
