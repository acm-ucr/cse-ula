import Image from "next/image";
import Link from "next/link";
import buttonArrow from "@/public/buttonArrow.svg";

interface buttonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: buttonProps) => {
  return (
    <div className="rounded-2xl bg-ula-yellow-accent p-3 text-3xl font-medium">
      <Link href={link} className="flex flex-row gap-12 pl-2">
        {text}
        <Image src={buttonArrow} alt={"Arrow"} />
      </Link>
    </div>
  );
};
export default Button;
