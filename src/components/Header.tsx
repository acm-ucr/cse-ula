interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <div className="text-center text-5xl font-extrabold text-ula-blue-primary">
      {text}
    </div>
  );
};
export default Header;
