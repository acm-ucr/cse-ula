import Card from "@/components/ula/Card";
import ULAs from "@/data/CurrentULAs";

const ULAMapping = () => {
  return (
    <div className="">
      <div className="mt-10 grid grid-cols-2 gap-x-40 gap-y-20 md:grid-cols-2">
        {ULAs.map((ULA, index) => (
          <Card
            key={index}
            name={ULA.name}
            classes={ULA.classes}
            image={ULA.image}
            description={ULA.desc}
          />
          ))}   
      </div>   
    </div>
  );
};
export default ULAMapping;
