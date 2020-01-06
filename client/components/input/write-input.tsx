import React from 'react';
import styled from '@emotion/styled';

import { Input } from '.';

import BP from '@constants/mediaquery';

export const StyledWriteInput = styled(Input)`
  padding: 10px;
  height: 60px;
  border: none;
  font-size: 24px;
  font-weight: bold;

  ${BP} {
    padding: 10px;
    height: 50px;
    font-size: 20px;
  }
`;

const WriteInput: React.FC = () => {
  return <StyledWriteInput type="text"></StyledWriteInput>;
};

export default WriteInput;
