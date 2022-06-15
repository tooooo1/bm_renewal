import { useNavigate } from 'react-router-dom';
import { TwoStringProps } from '../types';

const MenuItem = ({ title, option }: TwoStringProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="vpack p(1rem) pt(1rem) r(16) hover:cursor(pointer)+bg(#eee)+c(#2ac1bc) transition(.3s)"
      onClick={() => navigate('/food')}
    >
      <img src={option} width={100} alt="menu" />
      <div className="pt(1rem) font-family(BMHANNAPro) font(1.5rem)">{title}</div>
    </div>
  );
};

export default MenuItem;
