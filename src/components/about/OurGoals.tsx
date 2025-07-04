import OurGoalsProps from "@/components/about/OurGoalsProps";
import Book from "@/public/about/book.svg";
import head from "@/public/about/infinity.svg";
import something from "@/public/about/people.svg";
const OurGoals = () => {
  return (
    <OurGoalsProps
      image={Book}
      text="Improve the learning experience of students in core CS courses"
    />
  );
};
export default OurGoals;
