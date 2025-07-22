import Landing from "@/components/home/Landing";
import HelpInCourses from "@/components/home/HelpInCourses";
import Location from "@/components/home/Location";
import Questions from "@/components/home/Questions";
import Images from "@/components/home/Images";
import Testimony from "@/components/home/Testimony";

// import InfoButton from "@/components/home/InfoButton";
// import { FaBook } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Landing />
      <HelpInCourses />
      <Location />
      <Questions />
      <Images />
      <Testimony />
      {/* <InfoButton
        icon={<FaBook size={30} className="text-blue-800" />}
        text="Browse Courses"
      /> */}
    </div>
  );
};

export default Home;
