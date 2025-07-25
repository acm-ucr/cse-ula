import InfoButtonHeader from "@/components/home/InfoButtonHeader";
import blueBook from "@/public/home/blueBook.svg";
import InfoButton from "@/components/home/InfoButton";

const Questions = () => {
  return (
    <div className="">
      <InfoButtonHeader />
      <InfoButton icon={blueBook} text="Browse Courses" />
    </div>
  );
};
export default Questions;
