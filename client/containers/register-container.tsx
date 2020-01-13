import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { ContentInput } from '@components/input';
import { Button } from '@components/button';
import { BREAKPOINT, COLOR, BUTTON } from '@constants/index';

import { ETodoType } from '@redux/todo/todoType';

const RegisterContainer: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const dispatch = useDispatch();

  const setContentByChangeContentInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.currentTarget.value);

  const checkKeyDownAndEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key && event.key !== 'Enter') return;
  };

  const checkContentLengthBelowZero = () => {
    if (content.trim().length <= 0) return;
  };

  const onSubmitToDo = event => {
    checkKeyDownAndEnter(event);
    checkContentLengthBelowZero();
    setContent('');
    dispatch({
      type: ETodoType.TODO_REGISTER_REQUEST,
      payload: { content: content.trim() },
    });
  };

  return (
    <RegisterSection>
      <RegisterDiv>
        <ContentInput
          content={content}
          onChangeHandler={setContentByChangeContentInput}
          onKeyDownHandler={onSubmitToDo}
        />
        <Button
          onClickHandler={onSubmitToDo}
          buttonType={BUTTON.CREATE}
          buttonColor={content.trim().length <= 0 && COLOR.SILVER}
        />
      </RegisterDiv>
    </RegisterSection>
  );
};

export default RegisterContainer;

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
