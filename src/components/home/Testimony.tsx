import { testimonies } from "@/data/Testimonies";
import Card from "@/components/home/Card";

const Testimony = () => {
  return (
    <div className="flex w-full bg-ula-blue-light">
      <div className="mx-auto flex flex-grow flex-col p-6 md:w-1/2">
        <h2 className="my-8 text-center text-4xl font-semibold">Former ULAs</h2>
        <div className="grid grid-cols-2">
          {testimonies.slice(0, 2).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
        <h2 className="my-8 text-center text-4xl font-semibold">
          Current ULAs
        </h2>
        <div className="grid grid-cols-2">
          {testimonies.slice(2, 4).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
        <h2 className="my-8 text-center text-4xl font-semibold">
          Students on ULA
        </h2>
        <div className="grid grid-cols-2">
          {testimonies.slice(4, 6).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimony;
