const HelpInCourses = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl bg-white px-8 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold text-ula-blue-primary md:text-4xl">
        Do you need help in your CSE courses?
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 text-base font-semibold text-black md:text-lg">
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
