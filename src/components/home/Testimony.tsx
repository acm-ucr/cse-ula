import { testimonies } from "@/data/Testimonies";
import Card from "@/components/home/Card";

const Testimony = () => {
  return (
    <div className="flex w-full flex-col bg-ula-blue-light p-8">
      <div className="mx-auto flex w-3/4 flex-col justify-center">
        <div className="h-12" />
        <h2 className="my-8 text-center text-4xl font-semibold">Former ULAs</h2>
        <div className="grid grid-cols-2">
          {testimonies.slice(0, 2).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
        <div className="h-12" />
        <h2 className="my-8 text-center text-4xl font-semibold">
          Current ULAs
        </h2>
        <div className="grid grid-cols-2">
          {testimonies.slice(2, 4).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
        <div className="h-12" />
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
