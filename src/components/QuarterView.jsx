import Day from "./Day";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const QUARTERS = [
  [0, 1, 2],   // Jan, Feb, Mar
  [3, 4, 5],   // Apr, May, Jun
  [6, 7, 8],   // Jul, Aug, Sep
  [9, 10, 11], // Oct, Nov, Dec
];

function toLocalISODateString(date) {
  return date.toLocaleDateString('en-CA'); // 'YYYY-MM-DD'
}

export default function QuarterView({ weeks, year, holidayMap }) {
  // Group weeks by month index
  const monthMap = {};
  weeks.forEach((week) => {
    const month = week.days[0].getMonth();
    if (!monthMap[month]) monthMap[month] = [];
    monthMap[month].push(week);
  });

  return (
    <div className="flex flex-col gap-6">
      {QUARTERS.map((quarter, qIdx) => (
        <div key={qIdx}>
          <h2 className="text-xl font-bold mb-2 text-center">Q{qIdx + 1}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {quarter.map((monthIdx) => (
              <div
                key={monthIdx}
                className="border rounded p-2 w-[300px] bg-white shadow"
              >
                <h3 className="text-center font-semibold mb-1">
                  {monthNames[monthIdx]}
                </h3>
                <div className="grid grid-cols-7 gap-[1px] text-xs">
                  <div className="font-bold text-center">Sun</div>
                  <div className="font-bold text-center">Mon</div>
                  <div className="font-bold text-center">Tue</div>
                  <div className="font-bold text-center">Wed</div>
                  <div className="font-bold text-center">Thu</div>
                  <div className="font-bold text-center">Fri</div>
                  <div className="font-bold text-center">Sat</div>
                </div>

                {monthMap[monthIdx]?.map((week, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-7 gap-[1px] mt-1 ${week.color}`}
                  >
                    {week.days.map((day, j) => (
                      <Day
                        key={j}
                        day={day}
                        targetMonth={monthIdx}
                        isHoliday={!!holidayMap.get(toLocalISODateString(day))}
                        holidayName={holidayMap.get(toLocalISODateString(day))?.[0]}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
