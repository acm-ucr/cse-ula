type CourseOfferingCardProps = {
  course: string;
};
const CourseOfferingCard = ({ course }: CourseOfferingCardProps) => {
  return (
    <div className="flex h-[300px] w-[270px] items-center justify-center rounded-xl bg-ula-blue-accent text-4xl font-medium">
      {course}
    </div>
  );
};
export default CourseOfferingCard;
