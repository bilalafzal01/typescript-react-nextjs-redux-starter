import React from 'react';
import styled from '@emotion/styled';

import { Article } from '.';

interface IProps {
  content: string;
}

const StyledDetailCard = styled(Article)`
  padding: 20px 15px;
  text-align: center;
  h3 {
    margin: 0;
    cursor: default;
  }
`;

const DetailCard: React.FC<IProps> = ({ content }) => {
  return (
    <StyledDetailCard>
      <h3>{content}</h3>
    </StyledDetailCard>
  );
};

export default DetailCard;
