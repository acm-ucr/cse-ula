import InfoButtonHeader from "@/components/home/InfoButtonHeader";
import Landing from "@/components/home/Landing";
import HelpInCourses from "@/components/home/HelpInCourses";
import Location from "@/components/home/Location";
import Questions from "@/components/home/Questions";
import Images from "@/components/home/Images";
import Testimony from "@/components/home/Testimony";

const Home = () => {
  return (
    <div>
      <Landing />
      <HelpInCourses />
      <Location />
      <InfoButtonHeader text="What courses can I get help with?" />
      <Questions />
      <Images />
      <Testimony />
    </div>
  );
};

export default Home;
