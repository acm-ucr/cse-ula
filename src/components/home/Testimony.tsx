import { testimonies } from "@/data/Testimonies";
import Header from "@/components/Header";
import Card from "@/components/home/Card";

const Testimony = () => {
  return (
    <div className="flex w-full flex-col bg-ula-blue-highlight p-8">
      <Header text="Words from the ULA Community" />
      <div className="mx-auto flex w-3/4 flex-col justify-center">
        <p className="my-8 text-center text-4xl font-semibold">Former ULAs</p>
        <div className="grid grid-cols-2">
          {testimonies.slice(0, 2).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
        <p className="my-8 pt-6 text-center text-4xl font-semibold">
          Current ULAs
        </p>
        <div className="grid grid-cols-2">
          {testimonies.slice(2, 4).map(({ name, quote }, index) => (
            <Card key={index} name={name} quote={quote} />
          ))}
        </div>
        <p className="my-8 pt-6 text-center text-4xl font-semibold">
          Students on ULA
        </p>
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
