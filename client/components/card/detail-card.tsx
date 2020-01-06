import React from 'react';
import styled from '@emotion/styled';
import { Article } from '.';

const StyledDetailCard = styled(Article)`
  padding: 20px 15px;
  h3 {
    margin: 0;
    cursor: default;
  }
`;

const DetailCard = () => {
  return (
    <StyledDetailCard>
      <h3>하루에 양치질 3번은 꼭 하자!</h3>
    </StyledDetailCard>
  );
};

export default DetailCard;
