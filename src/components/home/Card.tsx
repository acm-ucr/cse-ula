import Image from "next/image";
import quoteIcon from "@/public/home/quote.svg";

interface componentProps {
  name: string;
  quote: string;
}

const Card = ({ name, quote }: componentProps) => {
  return (
    <div className="mx-auto my-8 flex w-2/3 flex-col place-items-center justify-evenly rounded-xl bg-white p-3 shadow-xl lg:p-8">
      <div className="place-items-center p-1">
        <Image src={quoteIcon} className="w-1/2 lg:w-3/4" alt="Quote Symbol" />
      </div>
      <div className="p-5 text-left text-sm lg:text-base">{quote}</div>
      <div className="p-1 text-sm font-bold lg:text-base">{name}</div>
    </div>
  );
};
export default Card;
