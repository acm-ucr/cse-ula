import Example from "@/components/Example";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center text-center text-2xl">
        <Example text1="Adjust" text2="These" text3="Props" />
      </div>
      <div className="mb-4 mr-2 flex items-center justify-end text-center text-2xl">
        <Button text="Get help here!" />
      </div>
    </div>
  );
};

export default Home;
