const InfoButton = ({ text = "What courses can I get help with?" }) => {
  return (
    <div className="pl-8">
      <div
        className="flex items-center border-l-8 px-4"
        style={{ borderLeftColor: "#FADA5E", borderLeftWidth: "8px" }}
      >
        <h1 className="text-2xl font-bold text-ula-blue-primary">{text}</h1>
      </div>
    </div>
  );
};
export default InfoButton;
