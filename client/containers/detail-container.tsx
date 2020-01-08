import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Button } from '@components/button';
import { DetailCard } from '@components/card';
import { COLOR, BUTTON } from '@constants/index';

import { TRootState } from '@redux/rootReducer';
import { ETodoType } from '@redux/todo/type';

interface IProps {
  id: string;
}

const DetailSection = styled.section`
  grid-template-rows: auto 50px;
  margin-top: 10%;
  width: 350px;
  border: 1px solid ${COLOR.SILVER};
  border-radius: 3px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  grid-template-columns: 1fr 1fr;
`;

const DetailContainer: React.FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { todoDatas } = useSelector((state: TRootState) => state.todo);

  const todoData = todoDatas.find(todoData => todoData.id === parseInt(id, 10));

  const onClickBack = async () => await router.push('/');

  const onClickAchieve = async () => {
    await router.replace('/');
    dispatch({
      type: ETodoType.TODO_ACHIEVE_REQUEST,
      payload: { id },
    });
  };

  return (
    <DetailSection>
      <DetailCard content={todoData.content} />
      <ButtonContainer>
        <div>
          <Button onClickHandler={onClickBack} buttonType={BUTTON.BACK} />
        </div>
        <div>
          <Button onClickHandler={onClickAchieve} buttonType={BUTTON.DONE} />
        </div>
      </ButtonContainer>
    </DetailSection>
  );
};

export default DetailContainer;
