import Image from "next/image";
import buttonArrow from "@/public/buttonArrow.svg";

const Button = (props: { text1: string }) => {
  return (
    <div className="rounded-2xl bg-ula-yellow-accent p-3 font-semibold">
      <button className="flex flex-row gap-14 pl-2">
        {props.text1}
        <Image src={buttonArrow} alt={"Arrow"} />{" "}
      </button>
    </div>
  );
};
export default Button;
