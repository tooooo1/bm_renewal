import styled from 'styled-components';
import { OptionItemProps } from '../../../types';
import { useCookies } from 'react-cookie';

const OptionItem = ({ children, isShownAlways = false }: OptionItemProps) => {
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);

  return (
    (isShownAlways || (!isShownAlways && cookies.AccessToken)) && (
      <StyledContainer>{children}</StyledContainer>
    )
  );
};

export default OptionItem;

const StyledContainer = styled.div<{ disabled?: boolean }>`
  width: 100%;
  position: relative;
  padding: 5px 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
