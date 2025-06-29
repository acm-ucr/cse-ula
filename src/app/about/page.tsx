import OurGoals from "@/components/about/OurGoals";
import Progress from "@/components/about/Progress";
import Professor from "@/components/about/Professor";
import CourseOfferings from "@/components/about/CourseOfferings";
import Citations from "@/components/about/Citations";

const About = () => {
  return (
    <div>
      About
      <OurGoals />
      <Progress />
      <Professor />
      <CourseOfferings />
      <Citations />
    </div>
  );
};

export default About;
