import CourseOfferingCard from "@/components/about/CourseOfferingCard";
import Header from "@/components/Header";
import { courses } from "@/data/CourseOfferings";

const CourseOfferings = () => {
  return (
    <div className="mb-6 flex w-full flex-col items-center justify-center bg-ula-blue-highlight py-8">
      <Header text="Course Offerings" />
      <div className="w-11/12 flex-col place-items-center py-10 text-center text-base md:w-2/3 lg:text-xl">
        <p className="pb-4">
          Our ULAs are here to support you through office hours, and directly in
          lab sections.
        </p>
        <p>
          Starting Week 2 of each quarter, each class listed below will have one
          or more ULAs there to offer you direct assistance!
        </p>
      </div>
      <div className="hidden flex-wrap justify-center gap-8 sm:flex">
        {courses.map((course, index) => (
          <CourseOfferingCard
            course={course.name}
            key={index}
            color={[0, 2, 5].includes(index) ? "blue" : "yellow"}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:hidden">
        {courses.map((course, index) => (
          <CourseOfferingCard
            course={course.name}
            key={index}
            color={[0, 3, 4].includes(index) ? "blue" : "yellow"}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseOfferings;
