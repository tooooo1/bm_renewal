interface Props {
  title: string;
  img: string;
}

const Header = ({ title, img }: Props) => {
  return (
    <div className="vbox pack p(1rem) pt(1rem) r(16) hover:cursor(pointer)+bg(#eee)+c(#2ac1bc) transition(.3s)">
      <img src={img} width={100} alt="menu" />
      <div className="pt(1rem) font-family(BMHANNAPro) font(1.5rem)">{title}</div>
    </div>
  );
};

export default Header;
