import Card from "@/components/ula/Card";
import ULAs from "@/data/CurrentULAs";

const ULAMapping = () => {
  return (
    <div className="">
      <div className="mx-16 flex flex-wrap items-center justify-center bg-ula-blue-highlight py-10">
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
