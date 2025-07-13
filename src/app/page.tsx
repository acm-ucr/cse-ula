import Landing from "@/components/home/Landing";
import HelpInCourses from "@/components/home/HelpInCourses";
import Location from "@/components/home/Location";
import Questions from "@/components/home/Questions";
import Testimony from "@/components/home/Testimony";

const Home = () => {
  return (
    <div className="">
      <Landing />
      <HelpInCourses />
      <Location />
      <Questions />
      <Testimony />
    </div>
  );
};

export default Home;
