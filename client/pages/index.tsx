import React from 'react';
import { NextJSContext } from 'next-redux-wrapper';
import styled from '@emotion/styled';

import RegisterContainer from '@components/container/register-container';
import ListContainer from '@components/container/list-container';

import { ETodoType } from '@redux/todo/type';
import BREAKPOINTS from '@constants/mediaquery';

const Main = styled.main`
  ${BREAKPOINTS} {
    display: grid;
    grid-template-rows: 112px 555px;
  }
`;

const Index = () => {
  return (
    <Main>
      <RegisterContainer />
      <ListContainer />
    </Main>
  );
};

Index.getInitialProps = async ({ store }: NextJSContext) => {
  store.dispatch({
    type: ETodoType.TODO_LOAD_REQUEST,
  });

  return {};
};

export default Index;
