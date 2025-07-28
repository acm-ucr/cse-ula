import CourseOfferingCard from "@/components/about/CourseOfferingCard";
import Header from "@/components/Header";
import { courses } from "@/data/CourseOfferings";

const CourseOfferings = () => {
  const firstRow = courses.slice(0, 4);
  const secondRow = courses.slice(4, 7);
  const lastItem = secondRow.length - 1;

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
      <div className="mx-auto mb-8 grid w-11/12 grid-cols-2 gap-8 md:w-2/3 md:grid-cols-4 md:justify-center">
        {firstRow.map((course, index) => (
          <div key={index} className="flex justify-center">
            <CourseOfferingCard
              course={course.name}
              color={index % 2 === 0 ? "blue" : "yellow"}
            />
          </div>
        ))}
      </div>
      <div className="mx-auto grid w-11/12 grid-cols-2 gap-8 md:w-1/2 md:grid-cols-3 md:justify-center">
        {secondRow.map((course, index) => (
          <div
            key={index}
            className={`flex justify-center ${index === lastItem ? "col-span-2 w-[173.75px] justify-self-center md:col-span-1 md:w-full" : ""}`}
          >
            <CourseOfferingCard
              course={course.name}
              color={(index + 4) % 2 != 0 ? "blue" : "yellow"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOfferings;
