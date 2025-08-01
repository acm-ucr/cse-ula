import Card from "@/components/ula/Card";
import ULAs from "@/data/CurrentULAs";

const ULAMapping = () => {
  return (
    <div className="">
      <div className="mx-10 grid grid-cols-3 justify-items-center bg-ula-blue-highlight py-8">
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
