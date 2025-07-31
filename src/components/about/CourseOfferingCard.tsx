type CourseOfferingCardProps = {
  course: string;
  color: "blue" | "yellow";
};

const CourseOfferingCard = ({ course, color }: CourseOfferingCardProps) => {
  const bgColor =
    color === "blue" ? "bg-ula-blue-accent" : "bg-ula-yellow-accent";

  return (
    <div
      className={`flex aspect-[11/12] w-1/3 items-center justify-center rounded-xl sm:w-1/5 ${bgColor} p-2 text-center text-4xl font-semibold`}
    >
      {course}
    </div>
  );
};

export default CourseOfferingCard;
