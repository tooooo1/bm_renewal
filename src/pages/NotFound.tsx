import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <StyledImg src={ErrorNotFound} width="100%" alt="errornotfound" /> */}
      <div className="pt(6)">요청하신 페이지를 찾을 수 없어요.</div>
      <div className="pt(6)">올바른 주소로 접속하셨나요?</div>
      <StyledButton onClick={() => navigate('/')}>홈으로 돌아가기</StyledButton>
    </div>
  );
};

export default NotFound;

const StyledButton = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 1.5rem 0;
  border: none;
  padding-bottom: 1rem;
  width: 40%;
  color: white;
  font-size: 1rem;
  border-radius: 12px;
  background: #2ac1bc;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
`;
