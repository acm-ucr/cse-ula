const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex h-1/2 w-7/12 flex-col items-center justify-center gap-12 rounded-lg bg-red-200">
      <div className="mb-5 w-1/2 bg-ula-blue-primary p-5 text-center text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1 text-center">
        <div className="mb-5 w-full rounded-full bg-ula-yellow-primary p-5">
          {props.text3}
        </div>
        <div className="mb-5 w-full rounded-full bg-ula-yellow-accent p-5">
          {props.text3}
        </div>
      </div>
      <div className="w-1/2 bg-ula-blue-accent p-5 text-center">
        {props.text2}
      </div>
    </div>
  );
};

export default Example;
