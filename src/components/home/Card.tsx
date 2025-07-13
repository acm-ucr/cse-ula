import Image from "next/image";
import quoteIcon from "@/public/home/quote.svg";

interface componentProps {
  name: string;
  quote: string;
}

const Card = ({ name, quote }: componentProps) => {
  return (
    <div className="h-3/8 flex w-1/4 flex-col place-items-center gap-1 rounded-xl bg-white p-8 shadow-xl">
      <div className="place-items-center p-1">
        <Image src={quoteIcon} className="w-3/4" alt="quoteIcon" />
      </div>
      <div className="p-5 text-left">{quote}</div>
      <div className="p-1 font-bold">{name}</div>
    </div>
  );
};
export default Card;
