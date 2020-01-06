import React from 'react';
import styled from '@emotion/styled';

import IconButton from '@components/button/icon-button';
import COLOR from '@constants/color';
import BUTTON from '@constants/button';
import DetailCard from '@components/card/detail-card';

const DetailSection = styled.section`
  grid-template-rows: auto 50px;
  margin-top: 10%;
  width: 350px;
  border: 3px solid ${COLOR.SILVER};
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  column-gap: 2px;
  div {
    background-color: ${COLOR.CLOUDS};
  }
`;

const DetailContainer: React.FC = () => {
  return (
    <DetailSection>
      <DetailCard />
      <ButtonContainer>
        <div>
          <IconButton>{BUTTON.BACK}</IconButton>
        </div>
        <div>
          <IconButton>{BUTTON.DONE}</IconButton>
        </div>
      </ButtonContainer>
    </DetailSection>
  );
};

export default DetailContainer;
