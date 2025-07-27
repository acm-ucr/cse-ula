import Image from "next/image";
import LandingPage from "@/public/home/WCHLanding.webp";

const Landing = () => {
  return (
    <div className="relative h-[960px] w-full">
      <Image
        src={LandingPage}
        alt="Landing Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-1/3 w-1/3 flex-col items-center gap-10 text-center">
          <div className="text-6xl font-bold leading-tight text-white">
            UCR CSE’s Undergraduate Learning Assistants
          </div>
          <div className="w-4/5 border-[3px] border-ula-yellow-primary"></div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
