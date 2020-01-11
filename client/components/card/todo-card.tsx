import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from '@emotion/styled';

import { Button } from '@components/button';
import { BUTTON, COLOR, BREAKPOINT } from '@constants/index';

import { ETodoType } from '@redux/todo/type';

interface IProps {
  id: number;
  content: string;
}

const StyledTodoCard = styled.article`
  grid-template-columns: auto 50px;
  height: 50px;
  background-color: ${COLOR.WHITE};
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s ease;
  }
`;

const StyledContent = styled('div')`
  padding: 12.5px 20px;
  margin: 0;
  h5 {
    margin: 0;
    height: 25px;
    font-size: 1rem;
    overflow: hidden;
    cursor: default;

    ${BREAKPOINT} {
      width: 175px;
    }
  }
`;

const Content = ({ children }) => (
  <StyledContent>
    <h3>{children}</h3>
  </StyledContent>
);

const TodoCard: React.FC<IProps> = ({ id, content }) => {
  const dispatch = useDispatch();

  const onClickAchieve = () => {
    dispatch({
      type: ETodoType.TODO_ACHIEVE_REQUEST,
      payload: { id },
    });
  };

  return (
    <StyledTodoCard>
      <Link href={`/detail/${id}`}>
        <a>
          <Content>{content}</Content>
        </a>
      </Link>
      <Button onClickHandler={onClickAchieve} buttonType={BUTTON.DONE} />
    </StyledTodoCard>
  );
};

export default TodoCard;
