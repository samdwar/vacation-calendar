// src/components/utils.js

export function getWeeksInYear(year) {
  const weeks = [];
  const start = new Date(year, 0, 1);
  start.setDate(start.getDate() - start.getDay()); // Sunday before Jan 1st

  while (start.getFullYear() <= year || (start.getFullYear() === year + 1 && start.getMonth() === 0)) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      const copy = new Date(start);
      week.push(copy);
      start.setDate(start.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

export function annotateWeeksWithHolidays(weeks, holidaySet) {
  return weeks.map((week) => {
    const holidaysInWeek = week.filter(day => holidaySet.has(day.toISOString().split("T")[0]));
    const holidayCount = holidaysInWeek.length;

    let color = "";
    if (holidayCount === 1) color = "bg-green-200";      // light green
    else if (holidayCount > 1) color = "bg-green-500";   // dark green

    return {
      days: week,
      color,
      holidayCount,
    };
  });
}
