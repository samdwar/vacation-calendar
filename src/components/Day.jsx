export default function Day({ day, targetMonth, isHoliday }) {
  const isCurrentMonth = day.getMonth() === targetMonth;
  const isToday = new Date().toDateString() === day.toDateString();

  let className = "relative w-10 h-10 flex items-center justify-center text-sm font-medium border";

  if (isHoliday) {
    className += " bg-green-600 text-white cursor-pointer group";
  }

  if (isToday) {
    className += " border-2 border-blue-500 rounded";
  }

  if (!isCurrentMonth) {
    className += " text-gray-300";
  } else if (!isHoliday) {
    className += " text-black";
  }

  const holidayName = isHoliday?.name || "Holiday";
  const wikiLink = `https://en.wikipedia.org/wiki/${holidayName.replace(/\s+/g, "_")}`;

  return (
    <div className={className}>
      {isHoliday ? (
        <a
          href={wikiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center relative"
        >
          {day.getDate()}

          {/* ✅ Improved Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10">
            <div className="relative bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded shadow-lg whitespace-nowrap transition-opacity duration-200">
              {holidayName}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 -mt-1 z-0"></div>
            </div>
          </div>
        </a>
      ) : (
        day.getDate()
      )}
    </div>
  );
}
