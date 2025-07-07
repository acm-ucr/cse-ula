//import Example from "@/components/Example";

import Card from "@/components/home/Card";

const Home = () => {
  return (
    // <div className="flex h-screen w-screen items-center justify-center text-center text-2xl">
    //   <Example text1="Adjust" text2="These" text3="Props" />
    // </div>

    <div className="flex h-screen w-screen items-center justify-center text-center text-xl">
      <Card
        name="Cody Kurpanek"
        quote="Being part of the very first group of ULAs, I'm extremely proud of have watched the program grow from a simple tutoring service into something much more -- a welcoming, collaborative community where students support one another, grow together, and build lasting friendships."
      />
    </div>

    // <div className="flex h-screen w-screen items-center justify-center text-center text-xl">
    //   <Card name="Friedrich Nietzsche" quote="Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you." />
    // </div>
  );
};

export default Home;
