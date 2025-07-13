import Image, {StaticImageData} from "next/image"

interface catProps {
    image : StaticImageData;
    name: string; 
}

const CatCard = ({image, name}:  catProps) => {
    return (
        <div className = "flex flex-col bg-orange-300 outline">
            <Image src = {image} alt = "Cat Photo"/>
            {name}
        </div>
    );
};

export default CatCard;