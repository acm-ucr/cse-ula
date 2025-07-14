type CourseOfferingCardProps = {
  course: string;
};

const CourseOfferingCard = ({ course }: CourseOfferingCardProps) => {
  return (
    <div className="flex aspect-[11/12] w-full items-center justify-center rounded-xl bg-ula-blue-accent text-center text-3xl font-semibold">
      {course}
    </div>
  );
};

export default CourseOfferingCard;
