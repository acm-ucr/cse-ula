const Citations = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white px-4">
      <div className="w-1/2 max-w-xl text-center text-black">
        <h2 className="text-xl font-bold">
          <a
            href="https://dl.acm.org/doi/abs/10.1145/3626253.3635630"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ula-blue-primary hover:underline"
          >
            Check out the research about the ULA program!
          </a>
        </h2>
        <br></br>
        <div>
          <p className="leading-snug">
            Haji Amin Shirazi, S., Salloum, M., & Watkinson, N. (2024, March) A
            Study of Undergraduate Learning Assistants (ULA) in Computer
            Science.
            <br></br>
            In Proceedings of the 55th ACM Technical Symposium on Computer
            Science Education V. 2 (pp. 1664-1665)
          </p>
        </div>
      </div>
    </div>
  );
};
export default Citations;
