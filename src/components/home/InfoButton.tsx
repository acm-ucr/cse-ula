import Image from "next/image";
import { ReactNode } from "react";

interface InfoButtonProps {
  icon: ReactNode;
  text: string;
}

const InfoButton = ({ icon, text }: InfoButtonProps) => {
  return (
    <div className="mb-3 flex items-center justify-evenly gap-3 bg-white p-3">
      <div className="flex items-center gap-3">
        <div>{icon}</div>
        <p className="text-lg font-medium text-black">{text}</p>
      </div>
      <Image src="/buttonArrow.svg" alt="arrow" width={64} height={64} />
    </div>
  );
};

export default InfoButton;
