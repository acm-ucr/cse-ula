import InfoButtonHeader from "@/components/home/InfoButtonHeader";
import blueBook from "@/public/home/blueBook.svg";
import InfoButton from "@/components/home/InfoButton";

const Questions = () => {
  return (
    <div className="">
      <InfoButtonHeader text="What courses can I get help with?" />
      <InfoButton icon={blueBook} text="Browse Courses" link="/about" />
    </div>
  );
};
export default Questions;
