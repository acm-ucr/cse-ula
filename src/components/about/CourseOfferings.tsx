import CourseOfferingCard from "@/components/about/CourseOfferingCard";
import Header from "@/components/Header";
import { Courses } from "@/data/CourseOfferings";

const CourseOfferings = () => {
  const firstRow = Courses.slice(0, 4);
  const secondRow = Courses.slice(4, 7);
  return (
    <div className="mb-6 flex w-full flex-col items-center justify-center bg-ula-blue-highlight py-8">
      <Header text="Course Offerings" />
      <div className="w-2/3 flex-col place-items-center py-10 text-center text-xl">
        <p className="pb-4">
          Our ULAs are here to support you through office hours, and directly in
          lab sections.
        </p>
        <p>
          Starting Week 2 of each quarter, each class listed below will have one
          or more ULAs there to offer you direct assistance!
        </p>
      </div>
      <div className="mx-auto mb-8 flex w-2/3 justify-center gap-x-8">
        {firstRow.map((course, index) => (
          <div key={index} className="flex w-1/4 justify-center">
            <CourseOfferingCard
              course={course.course}
              color={index % 2 === 0 ? "blue" : "yellow"}
            />
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-1/2 justify-center gap-x-8">
        {secondRow.map((course, index) => (
          <div key={index} className="flex w-1/3 justify-center">
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
