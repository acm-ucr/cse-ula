type CourseOfferingCardProps = {
  course: string;
  color: "blue" | "yellow";
};

const CourseOfferingCard = ({ course, color }: CourseOfferingCardProps) => {
  const bgColor =
    color === "blue" ? "bg-ula-blue-accent" : "bg-ula-yellow-accent";

  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-xl ${bgColor} p-2 text-center text-2xl font-semibold md:text-4xl`}
    >
      {course}
    </div>
  );
};

export default CourseOfferingCard;
