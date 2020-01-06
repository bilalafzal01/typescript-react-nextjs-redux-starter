import React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import DetailContainer from '@components/container/detail-container'

import BREAKPOINTS from '@constants/mediaquery';

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;

  ${BREAKPOINTS} {
    display: grid;
    grid-template-rows: 112px 555px;
  }
`;

const Detail: NextPage = () => {
  return (
    <Main>
      <DetailContainer />
    </Main>
  );
};

Detail.getInitialProps = async () => {
  return {};
};

export default Detail;
