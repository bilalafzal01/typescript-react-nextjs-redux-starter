import React from 'react';
import { NextJSContext } from 'next-redux-wrapper';
import styled from '@emotion/styled';

import DetailContainer from '@components/container/detail-container';

import { ETodoType } from '@redux/todo/type';

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Detail = ({ id }) => {
  return (
    <Main>
      <DetailContainer id={id} />
    </Main>
  );
};

Detail.getInitialProps = ({ store, query }: NextJSContext) => {
  store.dispatch({
    type: ETodoType.TODO_LOAD_REQUEST,
  });

  return { id: query.id };
};

export default Detail;