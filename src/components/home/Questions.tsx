import InfoButtonHeader from "@/components/home/InfoButtonHeader";
import blueBook from "@/public/home/blueBook.svg";
import InfoButton from "@/components/home/InfoButton";
import baselinePeople from "@/public/home/baselinePeople.svg";

const Questions = () => {
  return (
    <div className="flex flex-col justify-evenly px-2 pt-8 md:flex-row">
      <div className="min-w-[392px] md:w-2/5">
        <InfoButtonHeader text="What courses can I get help with?" />
        <InfoButton icon={blueBook} text="Browse Courses" link="/about" />
      </div>
      <div className="min-w-[392px] md:w-2/5">
        <InfoButtonHeader text="Who are the ULAs?" />
        <InfoButton icon={baselinePeople} text="Meet the ULAs" link="/ula" />
      </div>
    </div>
  );
};
export default Questions;
