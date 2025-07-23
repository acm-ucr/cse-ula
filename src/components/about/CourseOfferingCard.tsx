type CourseOfferingCardProps = {
  course: string;
  color: "blue" | "yellow";
};

const CourseOfferingCard = ({ course, color }: CourseOfferingCardProps) => {
  const bgColor =
    color === "blue" ? "bg-ula-blue-accent" : "bg-ula-yellow-accent";

  return (
    <div
      className={`flex aspect-[11/12] w-full items-center justify-center rounded-xl ${bgColor} text-center text-4xl font-semibold`}
    >
      {course}
    </div>
  );
};

export default CourseOfferingCard;
