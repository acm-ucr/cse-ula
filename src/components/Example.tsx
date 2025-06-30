const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="w-2/3 flex-col items-center gap-1 bg-red-200 p-10">
      <div className="rounded-xs mb-16 ml-52 w-1/2 bg-ula-blue-accent p-5 text-center text-white">
        {props.text1}
      </div>

      <div className="mb-16 ml-52 flex w-1/2 flex-row gap-1">
        <div className="w-full rounded-full bg-ula-yellow-accent p-5 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-ula-yellow-primary p-5 text-center">
          {props.text2}
        </div>
      </div>

      <div className="rounded-xs ml-52 w-1/2 bg-ula-blue-primary p-5 text-center">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
