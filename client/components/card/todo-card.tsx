import React from 'react';
import styled from '@emotion/styled';

import { Article } from '.';
import IconButton from '@components/button/icon-button';

import BUTTON from '@constants/button';
import COLOR from '@constants/color';
import BREAKPOINTS from '@constants/mediaquery';

const StyledTodoCard = styled(Article)`
  grid-template-columns: auto 50px;
  height: 50px;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s ease;
  }
`;

const StyledContent = styled('div')`
  padding: 12.5px 20px;
  margin: 0;
  h3 {
    margin: 0;
    height: 25px;
    overflow: hidden;
    cursor: default;

    ${BREAKPOINTS} {
      width: 175px;
    }
  }
`;

const Content = ({ children }) => (
  <StyledContent>
    <h3>{children}</h3>
  </StyledContent>
);

const TodoCard: React.FC = () => {
  return (
    <StyledTodoCard>
      <Content>행복한 하루를 ASB AS;FDJ;LAASD;FKLJAS;DFJ</Content>
      <IconButton>{BUTTON.DONE}</IconButton>
    </StyledTodoCard>
  );
};

export default TodoCard;
