import Day from "./Day";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function toUTCDateString(date) {
  return date.toISOString().split("T")[0]; // Always returns YYYY-MM-DD in UTC
}

export default function MonthView({ weeks, year, holidayMap }) {
  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {months.map((monthIndex) => {
        const firstOfMonth = new Date(year, monthIndex, 1);
        const firstDayToShow = new Date(firstOfMonth);
        firstDayToShow.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

        const days = [];
        for (let i = 0; i < 42; i++) {
          const d = new Date(firstDayToShow);
          d.setDate(firstDayToShow.getDate() + i);
          days.push(d);
        }

        const monthWeeks = [];
        for (let i = 0; i < 6; i++) {
          const week = days.slice(i * 7, (i + 1) * 7);
          const holidayCount = week.reduce((count, day) => {
            const iso = toUTCDateString(day);
            return holidayMap.has(iso) ? count + 1 : count;
          }, 0);

          const colorClass =
            holidayCount === 1 ? "light" :
            holidayCount > 1 ? "dark" : "none";

          monthWeeks.push({ week, colorClass });
        }

        return (
          <div key={monthIndex} className="border rounded p-2 w-[300px] bg-white shadow">
            <h3 className="text-center font-bold mb-2">{monthNames[monthIndex]}</h3>
            <div className="grid grid-cols-7 gap-[1px] text-xs">
              <div className="font-bold text-center">Sun</div>
              <div className="font-bold text-center">Mon</div>
              <div className="font-bold text-center">Tue</div>
              <div className="font-bold text-center">Wed</div>
              <div className="font-bold text-center">Thu</div>
              <div className="font-bold text-center">Fri</div>
              <div className="font-bold text-center">Sat</div>
            </div>

            {monthWeeks.map(({ week, colorClass }, idx) => {
              let weekClass = "grid grid-cols-7";
              if (colorClass === "light") weekClass += " bg-green-200";
              if (colorClass === "dark") weekClass += " bg-green-500";

              return (
                <div key={idx} className={weekClass}>
                  {week.map((day, i) => (
                    <Day
                      key={i}
                      day={day}
                      targetMonth={monthIndex}
                      isHoliday={holidayMap.has(toUTCDateString(day))}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
