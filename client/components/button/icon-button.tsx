import styled from '@emotion/styled';

import { Button } from '.';
import COLOR from '@constants/color';

export const StyledIconButton = styled(Button)`
  margin: auto;
  width: 40px;
  height: 40px;
  color: ${COLOR.CARROT};
  background-color: inherit;
`;

const IconButton = ({ children }) => {
  return (
    <StyledIconButton>
      <i className="material-icons">{children}</i>
    </StyledIconButton>
  );
};

export default IconButton;
