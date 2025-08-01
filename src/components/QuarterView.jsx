import Day from "./Day";
import { toLocalDateString } from "./utils";

const quarterMonths = [
  ["January", "February", "March"],
  ["April", "May", "June"],
  ["July", "August", "September"],
  ["October", "November", "December"],
];

export default function QuarterView({ weeks, year, holidayMap, countryCode }) {
  return (
    <div className="space-y-8">
      {quarterMonths.map((quarter, qIdx) => (
        <div key={qIdx}>
          <h2 className="text-xl font-bold text-center mb-2">
            Q{qIdx + 1} – {quarter.join(", ")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            {quarter.map((monthName, mIdx) => {
              const monthIndex = qIdx * 3 + mIdx;
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
                  const iso = toLocalDateString(day, countryCode);
                  return holidayMap.has(iso) ? count + holidayMap.get(iso).length : count;
                }, 0);

                const colorClass =
                  holidayCount === 1 ? "light" :
                  holidayCount > 1 ? "dark" : "none";

                monthWeeks.push({ week, colorClass });
              }

              return (
                <div
                  key={monthIndex}
                  className="border rounded p-2 bg-white shadow w-[300px]"
                >
                  <h3 className="text-center font-bold mb-2">{monthName}</h3>
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
                        {week.map((day, i) => {
                          const dateStr = toLocalDateString(day, countryCode);
                          const holidays = holidayMap.get(dateStr) || [];
                          return (
                            <Day
                              key={i}
                              day={day}
                              targetMonth={monthIndex}
                              isHoliday={holidays[0]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}