import OurGoalsCard from "@/components/about/OurGoalsCard";
import Header from "@/components/Header";
import { ourGoalsCard } from "@/data/OurGoalsCards";

const OurGoals = () => {
  return (
    <div className="py-8">
      <Header text="Our Goals" />
      <div className="flex w-full flex-wrap justify-evenly md:pt-6 lg:flex-nowrap">
        {ourGoalsCard.map(({ image, text }, index) => (
          <OurGoalsCard key={index} image={image} text={text} />
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
