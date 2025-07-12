const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 items-center gap-10 bg-red-200 p-10">
      <div className="flex w-full flex-col gap-10">
        <div className="w-full rounded-sm bg-ula-blue-primary p-5 text-center text-white">
          {props.text1}
        </div>
        <div className="flex w-full flex-row gap-1">
          <div className="w-1/2 rounded-full bg-ula-yellow-primary p-5 text-center">
            {props.text2}
          </div>
          <div className="inline-block w-1/2 rounded-full bg-ula-yellow-accent p-5 text-center">
            {props.text2}
          </div>
        </div>
        <div className="w-full rounded-sm bg-ula-blue-accent p-5 text-center">
          {props.text3}
        </div>
      </div>

      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};

export default Example;
