const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-white">
      <div className="flex w-2/3 flex-col justify-center gap-10 rounded-lg bg-red-200 p-10">
        {/* box1 */}
        <div className="flex-1 bg-ula-blue-primary p-4 text-center text-white">
          {props.text1}
        </div>

        <div className="flex w-full flex-row justify-center gap-6">
          {/* box2 */}
          <div className="flex w-1/2 flex-row gap-1">
            <div className="flex-1 rounded-full bg-ula-yellow-primary p-4 text-center text-black">
              {props.text2}
            </div>

            {/* box3 */}
            <div className="flex-1 rounded-full bg-ula-yellow-accent p-4 text-center text-black">
              {props.text3}
            </div>
          </div>

          {/* box4 */}
        </div>
        <div className="flex-1 bg-ula-blue-accent p-4 text-center text-black">
          {props.text4}
        </div>
        {/* Hint: Add another box/div here similarly to line 4 */}
      </div>
    </div>
  );
};

export default Example;
