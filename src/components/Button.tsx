import Image from "next/image";
import buttonArrow from "@/public/buttonArrow.svg";

interface buttonProps {
  text: string;
}

const Button = ({ text }: buttonProps) => {
  return (
    <div className="rounded-2xl bg-ula-yellow-accent p-3 font-semibold">
      <button className="flex flex-row gap-12 pl-2">
        {text}
        <Image src={buttonArrow} alt={"Arrow"} />
      </button>
    </div>
  );
};
export default Button;
