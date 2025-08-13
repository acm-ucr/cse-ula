import ErrorPage from "@/public/error.webp";
import Image from "next/image";
import Button from "./Button";

type Props = {
  message: string;
  details: string;
};

const ErrorMessage = ({ message, details }: Props) => {
  return (
    <div className="relative h-screen w-full">
      <Image src={ErrorPage} alt="Error Page" fill objectFit="cover" priority />

      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="flex h-1/5 w-1/5 flex-col place-items-center justify-center gap-4 text-center text-white">
          <div className="border-b-4 border-ula-yellow-primary pb-3 text-4xl font-bold xl:text-6xl">
            {message}
          </div>
          <div className="text-xl xl:text-2xl">{details}</div>
        </div>

        <Button text="Return home" link="./" />
      </div>
    </div>
  );
};
export default ErrorMessage;
