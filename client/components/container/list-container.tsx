import React from 'react';
import styled from '@emotion/styled';

import TodoCard from '@components/card/todo-card';

import COLOR from '@constants/color';
import BREAKPOINTS from '@constants/mediaquery';

const ListSection = styled.section`
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr;
  margin: 3% auto;
  min-width: 500px;
  max-width: 900px;

  ${BREAKPOINTS} {
    margin: auto;
    min-width: 375px;
    max-width: 375px;
    height: 100%;
  }
`;

const ListDiv = styled.div`
  display: grid;
  align-items: flex-start;
  grid-auto-rows: 50px;
  row-gap: 20px;
  margin: 0 50px;
  padding: 40px 20px;
  border: 5px solid ${COLOR.CLOUDS};
  border-radius: 10px;
  background-color: ${COLOR.CLOUDS};

  ${BREAKPOINTS} {
    overflow-y: scroll;
    padding: 20px;
    width: 315px;
    height: 520px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ListContainer: React.FC = () => {
  return (
    <ListSection>
      <ListDiv>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </ListDiv>
    </ListSection>
  );
};

export default ListContainer;
