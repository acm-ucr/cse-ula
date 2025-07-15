import OurGoalsCard from "@/components/about/OurGoalsCard";
import { ourGoalsCard } from "@/data/OurGoalsCards";

const OurGoals = () => {
  return (
    <div>
      <div className="flex justify-center p-8 text-4xl font-bold text-ula-blue-primary">
        Our Goals
      </div>
      <div className="flex w-full justify-evenly">
        {ourGoalsCard.map(({ image, text }, index) => (
          <OurGoalsCard key={index} image={image} text={text} />
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
