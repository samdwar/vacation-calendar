import { useEffect, useRef, useState } from "react";

export default function Day({ day, targetMonth, isHoliday = [] }) {
  const isCurrentMonth = day.getMonth() === targetMonth;
  const isToday = new Date().toDateString() === day.toDateString();
  const [showLinks, setShowLinks] = useState(false);
  const popupRef = useRef();

  let className = "relative w-10 h-10 flex items-center justify-center text-sm font-medium border";

  if (isHoliday.length > 0) {
    className += " bg-green-600 text-white cursor-pointer group";
  }

  if (isToday) {
    className += " border-2 border-blue-500 rounded";
  }

  if (!isCurrentMonth) {
    className += " text-gray-300";
  } else if (isHoliday.length === 0) {
    className += " text-black";
  }

  // Close popup on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowLinks(false);
      }
    }
    if (showLinks) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLinks]);

  return (
    <div
      className={className}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isHoliday.length > 0) setShowLinks(!showLinks);
      }}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {day.getDate()}

        {/* Tooltip on hover */}
        {isHoliday.length > 0 && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10">
            <div className="relative bg-white text-gray-900 text-xs font-medium px-3 py-1 rounded shadow-lg whitespace-nowrap transition-opacity duration-200 max-w-[200px] text-center border">
              {isHoliday.map((h, idx) => (
                <div key={idx}>{h.name}</div>
              ))}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 -mt-1 z-0 border-b border-r" />
            </div>
          </div>
        )}

        {/* Styled Light Popup */}
        {showLinks && (
          <div
            ref={popupRef}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-30 w-64 bg-white text-gray-800 rounded-xl shadow-xl p-3 space-y-2 border border-gray-200"
          >
            {isHoliday.map((h, idx) => {
              const wikiLink = `https://en.wikipedia.org/wiki/${encodeURIComponent(h.name).replace(/%20/g, "_")}`;
              const colorDot = ["bg-blue-400", "bg-red-400", "bg-pink-400", "bg-yellow-400", "bg-green-400"][idx % 5];
              return (
                <a
                  key={idx}
                  href={wikiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between text-sm hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${colorDot}`} />
                    <span className="truncate">{h.name}</span>
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
