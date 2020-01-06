import React from 'react';
import styled from '@emotion/styled';

import WriteInput from '@components/input/write-input';
import IconButton from '@components/button/icon-button';

import BREAKPOINTS from '@constants/mediaquery';
import COLOR from '@constants/color';
import BUTTON from '@constants/button';

const RegisterSection = styled.section`
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
  }
`;

const RegisterDiv = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 70px;
  margin: auto 50px;
  border: 1px solid ${COLOR.CARROT};

  ${BREAKPOINTS} {
    grid-template-columns: 263px 50px;
    justify-content: center;
    margin: 30px;
  }
`;

const RegisterContainer: React.FC = () => {
  return (
    <RegisterSection>
      <RegisterDiv>
        <WriteInput />
        <IconButton>{BUTTON.CREATE}</IconButton>
      </RegisterDiv>
    </RegisterSection>
  );
};

export default RegisterContainer;
