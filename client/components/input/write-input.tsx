import React from 'react';
import styled from '@emotion/styled';

import { Input } from '.';

import BREAKPOINT from '@constants/mediaquery';

interface IProps {
  content: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownHandler: (e?) => void;
}

const StyledWriteInput = styled(Input)`
  padding: 10px;
  height: 60px;
  border: none;
  font-size: 24px;
  font-weight: bold;

  ${BREAKPOINT} {
    padding: 10px;
    height: 50px;
    font-size: 20px;
  }
`;

const WriteInput: React.FC<IProps> = ({ content, onChangeHandler, onKeyDownHandler }) => {
  return (
    <StyledWriteInput
      type="text"
      value={content}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    ></StyledWriteInput>
  );
};

export default WriteInput;
