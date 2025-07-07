import Book from "@/public/about/book.svg";
import OurGoalsCard from "@/components/about/OurGoalsCard";

const OurGoals = () => {
  return (
    <div className="flex w-full justify-evenly">
      <OurGoalsCard
        image={Book}
        text="Improve the learning experience of students in core CS courses"
      />
      <OurGoalsCard
        image={Book}
        text="Improve the learning experience of students in core CS courses"
      />
      <OurGoalsCard
        image={Book}
        text="Improve the learning experience of students in core CS courses"
      />
    </div>
  );
};

export default OurGoals;
