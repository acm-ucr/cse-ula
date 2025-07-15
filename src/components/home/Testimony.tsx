import { Testimonies } from "@/data/Testimonies";
import Card from "@/components/home/Card";

const Testimony = () => {
  return (
    <div className="mx-auto flex flex-grow flex-col bg-blue-50 p-6 md:w-1/2">
      <h2 className="mb-10 mt-10 text-center text-4xl font-semibold">
        Former ULAs
      </h2>
      <div className="grid grid-cols-2">
        {Testimonies.slice(0, 2).map(({ name, quote }, index) => (
          <Card key={index} name={name} quote={quote} />
        ))}
      </div>
      <h2 className="mb-10 mt-10 text-center text-4xl font-semibold">
        Current ULAs
      </h2>
      <div className="grid grid-cols-2">
        {Testimonies.slice(2, 4).map(({ name, quote }, index) => (
          <Card key={index} name={name} quote={quote} />
        ))}
      </div>
      <h2 className="mb-10 mt-10 text-center text-4xl font-semibold">
        Students on ULA
      </h2>
      <div className="grid grid-cols-2">
        {Testimonies.slice(4, 6).map(({ name, quote }, index) => (
          <Card key={index} name={name} quote={quote} />
        ))}
      </div>
    </div>
  );
};
export default Testimony;
