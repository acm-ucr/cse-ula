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
      className={`cursor-default px-10 pt-3 text-lg lg:text-3xl ${isToday ? "rounded-md bg-ula-blue-primary pb-2 text-white" : "pb-12 text-black"}`}
    >
      {day}
      &nbsp;
      {dayNum}
    </div>
  );
};

export default CustomDayHeader;
