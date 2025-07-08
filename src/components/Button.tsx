import Image from "next/image";
import buttonArrow from "@/public/ButtonArrow.svg";

const Button = (props: { text1: string }) => {
  return (
    <div className="rounded-2xl bg-ula-yellow-accent p-3 font-semibold">
      <button className="flex flex-row pl-2">
        {props.text1}&emsp;&emsp;&emsp;{" "}
        <Image src={buttonArrow} alt={"Arrow"} />{" "}
      </button>
    </div>
  );
};
export default Button;
