import Link from "next/link";
import Header from "@/components/Header";

const Citations = () => {
  return (
    <div>
      <Header text="Citations" />

      <div className="mt-6 flex justify-center px-4 text-black">
        <div className="mb-6 w-1/2 text-center text-xl font-bold">
          Check out the research about the ULA program!
          <p className="my-8 text-base font-normal tracking-wide">
            <Link
              href="https://dl.acm.org/doi/abs/10.1145/3626253.3635630"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Haji Amin Shirazi, S., Salloum, M., & Watkinson, N. (2024, March)
              A Study of Undergraduate Learning Assistants (ULAs) in Computer
              Science.
              <br />
              In Proceedings of the 55th ACM Technical Symposium on Computer
              Science Education V. 2 (pp. 1664-1665)
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Citations;
