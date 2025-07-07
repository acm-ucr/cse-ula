import Image from "next/image";
import quoteIcon from "@/public/home/quote.svg";

interface ComponentProps {
  name: string;
  quote: string;
}

const Card = ({ name, quote }: ComponentProps) => {
  return (
    <div className="h-3/8 flex w-1/4 flex-col place-items-center gap-1 rounded-xl bg-white p-8 shadow-xl">
      <div className="place-items-center p-1">
        <Image src={quoteIcon} width="50" height="50" alt="quoteIcon"></Image>
      </div>
      <div className="p-5 text-left">{quote}</div>
      <div className="p-1 font-bold">{name}</div>
    </div>
  );
};
export default Card;
