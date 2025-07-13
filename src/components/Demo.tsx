import { CatInfo } from "@/data/Cats";
import CatCard from "@/components/CatCard";

const Demo = () => {
  return (
    <div>
      Demo
      <div className="grid grid-cols-3">
        {CatInfo.map(({ image, name }, index) => (
          <CatCard key={index} image={image} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Demo;
