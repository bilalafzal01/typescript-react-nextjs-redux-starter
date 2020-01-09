import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { ContentInput } from '@components/input';
import { Button } from '@components/button';
import { BREAKPOINT, COLOR, BUTTON } from '@constants/index';

import { ETodoType } from '@redux/todo/type';

const RegisterSection = styled.section`
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr;
  margin: 3% auto;
  min-width: 500px;
  max-width: 900px;

  ${BREAKPOINT} {
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

  ${BREAKPOINT} {
    grid-template-columns: 263px 50px;
    justify-content: center;
    margin: 30px;
  }
`;

const RegisterContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState<string>('input content');

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.currentTarget.value);

  const onSubmit = e => {
    if (e.key && e.key !== 'Enter') return;
    if (content.trim().length <= 0) return;

    setContent('');

    dispatch({
      type: ETodoType.TODO_REGISTER_REQUEST,
      payload: { content: content.trim() },
    });
  };

  return (
    <RegisterSection>
      <RegisterDiv>
        <ContentInput content={content} onChangeHandler={onChangeContent} onKeyDownHandler={onSubmit} />
        <Button
          onClickHandler={onSubmit}
          buttonType={BUTTON.CREATE}
          buttonColor={content.trim().length <= 0 && COLOR.SILVER}
        />
      </RegisterDiv>
    </RegisterSection>
  );
};

export default RegisterContainer;
