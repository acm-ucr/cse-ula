const Example = (props: { text1?: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-y-12 rounded-md bg-red-200 p-10 text-center">
      <div className="w-1/2 bg-ula-blue-primary p-5 text-center text-white">
        {"Some"}
      </div>
      <div className="flex w-1/2 flex-row gap-x-1.5">
        <div className="px-15 w-full rounded-full bg-ula-yellow-primary py-5 text-center">
          {props.text3}
        </div>
        <div className="px-15 w-full rounded-full bg-ula-yellow-accent py-5 text-center">
          {props.text3}
        </div>
      </div>
      <div className="flex w-1/2 flex-col bg-ula-blue-accent p-5 text-center">
        {"Here"}
      </div>
    </div>
  );
};

export default Example;
