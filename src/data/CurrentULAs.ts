//Put current ULA's Name, Courses, and Description
//Delete Comments
import Amber from "@/public/ulas/amber.webp"
import Amshu from "@/public/ulas/amshu.webp"
import Angel from "@/public/ulas/angel.webp"
import Athena from "@/public/ulas/athena.webp"
import Ishan from "@/public/ulas/ishan.webp"
import Joel from "@/public/ulas/joel.webp"
import Kevin from "@/public/ulas/kevin.webp"
import Natalie from "@/public/ulas/natalie.webp"
import Ramya from "@/public/ulas/ramya.webp"
import Sahana from "@/public/ulas/sahana.webp"
import Stanley from "@/public/ulas/stanley.webp"
import { StaticImageData } from "next/image";

export interface ULA {
  name: string;
  classes: string;
  image: StaticImageData;
  desc: string;
}

const ULAs: ULA[] = [
    {
        name: "Amber",
        classes: "CS10ABC",
        image: Amber,
        desc: ""
    },    
    {
        name: "Amshu",
        classes: "CS10ABC",
        image: Amshu,
        desc: ""
    },
    {
        name: "Angel",
        classes: "CS10ABC",
        image: Angel,
        desc: ""
    },
    {
        name: "Athena",
        classes: "CS10ABC",
        image: Athena,
        desc: ""
    },
    {
        name: "Ishan",
        classes: "CS10ABC",
        image: Ishan,
        desc: ""
    },
    {
        name: "Joel",
        classes: "CS10ABC",
        image: Joel,
        desc: ""
    },
    {
        name: "Kevin",
        classes: "CS10ABC",
        image: Kevin,
        desc: ""
    },
    {
        name: "Natalie",
        classes: "CS10ABC",
        image: Natalie,
        desc: ""
    },
    {
        name: "Ramya",
        classes: "CS10ABC",
        image: Ramya,
        desc: ""
    },
    {
        name: "Sahana",
        classes: "CS10ABC",
        image: Sahana,
        desc: ""
    },
    {
        name: "Stanley",
        classes: "CS10ABC",
        image: Stanley,
        desc: ""
    },
]

export default ULAs;