const CustomDayHeader = ({ date }: { date: Date }) => {
  const isToday = (() => {
    const now = new Date();
    return (
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth() &&
      now.getDate() === date.getDate()
    );
  })();

  const day = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
  const dayNum = date.getDate().toString().padStart(2, "0");

  return (
    <div
      className={`flex items-center justify-center px-10 pb-12 pt-3 text-[13px] text-black md:text-3xl ${isToday && "rounded-md bg-ula-blue-primary pb-2 text-white"}`}
    >
      {day}
      <span className="hidden md:inline">&nbsp;{dayNum}</span>
    </div>
  );
};

export default CustomDayHeader;
