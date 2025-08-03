interface infoButtonHeaderProps {
  text: string;
}
const InfoButtonHeader = ({ text }: infoButtonHeaderProps) => {
  return (
    <div className="m-4 border-l-8 border-ula-yellow-primary px-4 text-3xl font-bold text-ula-blue-primary">
      {text}
    </div>
  );
};
export default InfoButtonHeader;
