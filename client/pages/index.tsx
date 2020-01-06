import React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import RegisterContainer from '@components/container/register-container';
import ListContainer from '@components/container/list-container';

import BREAKPOINTS from '@constants/mediaquery';

const Main = styled.main`
  ${BREAKPOINTS} {
    display: grid;
    grid-template-rows: 112px 555px;
  }
`;

const Index: NextPage = () => {
  return (
    <Main>
      <RegisterContainer />
      <ListContainer />
    </Main>
  );
};

Index.getInitialProps = async () => {
  return {};
};

export default Index;
