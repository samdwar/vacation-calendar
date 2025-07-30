export default function Day({ day, targetMonth, isHoliday }) {
  const isCurrentMonth = day.getMonth() === targetMonth;
  const isToday = new Date().toDateString() === day.toDateString();

  let className = "w-10 h-10 flex items-center justify-center text-sm font-medium border";

  if (isHoliday) {
    className += " bg-green-600 text-white";
  }

  if (isToday) {
    className += " border-2 border-blue-500 rounded";
  }

  if (!isCurrentMonth) {
    className += " text-gray-300";
  } else if (!isHoliday) {
    className += " text-black";
  }

  return (
    <div className={className}>
      {day.getDate()}
    </div>
  );
}
