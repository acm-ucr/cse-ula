import React from "react";
interface InfoButtonHeaderProps {
  text: string;
}
const InfoButtonHeader = ({ text }: InfoButtonHeaderProps) => {
  return (
    <div className="m-4">
      <div className="flex items-center border-l-8 border-[#FFB81C] px-4">
        <div className="text-3xl font-bold text-ula-blue-primary">{text}</div>
      </div>
    </div>
  );
};
export default InfoButtonHeader;
