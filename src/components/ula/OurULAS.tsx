import Card from "@/components/ula/Card";
import Angel from "@/public/ulas/angel.webp";

const ULAMapping = () => {
  return (
    <div className="">
      ULA Mapping
      <Card
        image={Angel}
        name="Angel"
        classes="CS10ABC"
        description="Hi! My name is Angel Franco and I am a 3rd year Math major with a concentration in Computational Math. I became a ULA because I like to help. If you ever need help with CS10ABC I got you! If you like One Piece we can talk about that too! (Just don't spoil because I don't read the Manga)"
      />
    </div>
  );
};
export default ULAMapping;
