import Header from "@/components/Header";
const HelpInCourses = () => {
  return (
    <div className="mx-auto w-full p-8">
      <Header text="Do you need help in your CSE courses?" />
      <div className="mt-5 flex justify-center">
        <div className="grid grid-cols-1 gap-2 font-semibold md:grid-cols-2 md:gap-14 md:text-lg">
          <ul className="space-y-2">
            <li>✓ Python: CS 9A, 9B, 9C</li>
            <li>✓ Software: CS 10A, 10B, 10C</li>
            <li>✓ Discrete Math: CS 011 / MATH 011</li>
          </ul>

          <ul className="space-y-2">
            <li>✓ Algorithms: CS 111, 141</li>
            <li>✓ Computer Systems: CS 61</li>
            <li>✓ Software Construction: CS 100</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpInCourses;
