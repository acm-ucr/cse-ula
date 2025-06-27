const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 items-center gap-1 bg-red-200 p-10">
      <div className="w-1/2 bg-ula-blue-primary p-5 text-left">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="w-full bg-ula-blue-accent p-5 text-left">
          props.text2
        </div>
        <div className="w-full bg-ula-yellow-accent p-5 text-right">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};

export default Example;
