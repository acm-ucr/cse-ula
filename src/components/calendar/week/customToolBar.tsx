// import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ToolbarProps, Navigate } from "react-big-calendar";
import type { CalendarEvent } from "../CalendarCall";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CustomToolbarProps extends ToolbarProps<CalendarEvent, object> {
  selectedClass: string[];
  setSelectedClass: (types: string[]) => void;
  allClassTypes: string[];
}
const CustomToolbar: React.FC<CustomToolbarProps> = ({
  date,
  onNavigate,
  selectedClass,
  setSelectedClass,
  allClassTypes,
  view,
}) => {
  const monthNums = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const isToday = (() => {
    const now = new Date();
    return (
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth() &&
      now.getDate() === date.getDate()
    );
  })();

  return (
    <div>
      <div className="mx-auto flex w-full flex-col items-center justify-between pb-8 md:flex-row">
        <div className="flex justify-start">
          <ToggleGroup
            type="multiple"
            value={selectedClass}
            onValueChange={(types) => {
              const toggledType =
                selectedClass.find((type) => !types.includes(type)) ??
                types.find((type) => !selectedClass.includes(type));

              //All different edge cases of selecting buttons
              if (
                selectedClass.length === allClassTypes.length &&
                types.length === allClassTypes.length - 1
              ) {
                setSelectedClass([toggledType!]);
              } else if (types.length === 0) {
                setSelectedClass(allClassTypes);
              } else {
                setSelectedClass(types);
              }
            }}
            className="grid grid-cols-3 gap-2 pb-4 md:flex md:gap-0 md:space-x-2 md:pb-0"
          >
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 009ABC"
            >
              CS 009ABC
            </ToggleGroupItem>
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 010ABC"
            >
              CS 010ABC
            </ToggleGroupItem>
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 011"
            >
              CS 011
            </ToggleGroupItem>
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 061"
            >
              CS 061
            </ToggleGroupItem>
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 100"
            >
              CS 100
            </ToggleGroupItem>
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 111"
            >
              CS 111
            </ToggleGroupItem>
            <ToggleGroupItem
              className="flex w-full items-center justify-center text-nowrap rounded-md border-2 border-ula-yellow-primary p-3 text-black data-[state=on]:bg-ula-yellow-primary data-[state=on]:text-black"
              value="CS 141"
            >
              CS 141
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex w-full items-center justify-center pb-6 md:justify-end md:space-x-4 md:pb-0">
          <button
            onClick={() => onNavigate(Navigate.PREVIOUS)}
            className="order-1 text-2xl text-ula-blue-primary transition hover:-translate-x-1 md:text-3xl"
          >
            <BsArrowLeft />
          </button>
          <div className="order-2 w-fit px-4 text-3xl text-ula-blue-primary md:px-0 md:text-4xl">
            {monthNums[date.getMonth()]} /{" "}
            {date.getFullYear().toString().substring(2)}
          </div>
          <button
            onClick={() => onNavigate(Navigate.NEXT)}
            className="order-3 text-2xl text-ula-blue-primary transition hover:translate-x-1 md:text-3xl"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
      {view == "day" && (
        <div
          className={`text-center text-3xl font-bold text-black ${isToday ? "rounded-md bg-ula-blue-primary text-white" : "rounded-md border-2 border-black"}`}
        >
          {date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()}
          <br />
          {date.getDate()}
        </div>
      )}
    </div>
  );
};

export default CustomToolbar;
