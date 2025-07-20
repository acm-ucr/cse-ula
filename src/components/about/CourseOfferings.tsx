import CourseOfferingCard from "@/components/about/CourseOfferingCard";
import { Courses } from "@/data/CourseOfferings";

const CourseOfferings = () => {
  const firstRow = Courses.slice(0, 4);
  const secondRow = Courses.slice(4, 7);
  return (
    <div className="py-20">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-7xl font-bold text-ula-blue-primary">
          Course Offerings
        </div>
        <div className="mx-80 py-10 text-center text-3xl">
          <div className="pb-4">
            Our ULAs are here to support you through office hours, and directly
            in lab sections.
          </div>
          <div>
            Starting Week 2 of each quarter, each class listed below will have
            one or more ULAs there to offer you direct assistance!
          </div>
        </div>
      </div>
      <div className="mb-10 flex justify-center gap-x-10 px-64">
        {firstRow.map((course, index) => (
          <div key={index} className="flex w-[22%] justify-center">
            <CourseOfferingCard
              course={course.course}
              color={index % 2 === 0 ? "blue" : "yellow"}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-10 px-64">
        {secondRow.map((course, index) => (
          <div key={index} className="flex w-[22%] justify-center">
            <CourseOfferingCard
              course={course.course}
              color={(index + 4) % 2 != 0 ? "blue" : "yellow"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOfferings;
