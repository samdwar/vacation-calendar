// src/components/utils.js
// utils.js

import { DateTime } from "luxon";

export function toLocalDateString(date, countryCode) {
  const timeZoneMap = {
    in: "Asia/Kolkata",
    us: "America/New_York",
    ca: "America/Toronto",
    gb: "Europe/London",
    fr: "Europe/Paris",
    // Add more as needed
  };

  const zone = timeZoneMap[countryCode?.toLowerCase()] || "UTC";

  // Convert JS date to ISO string, extract date only (yyyy-mm-dd)
  const dateString = date.toISOString().split("T")[0];

  // Create Luxon DateTime from string + zone to avoid time shifting
  const dt = DateTime.fromISO(dateString, { zone });

  return dt.toISODate(); // Always returns YYYY-MM-DD in that country's zone

}

const countryTimeZones = {
  IN: "Asia/Kolkata",
  US: "America/New_York",
  GB: "Europe/London",
  FR: "Europe/Paris",
};

// export function toLocalDateString(date, countryCode) {
//   const timeZone = countryTimeZones[countryCode] || "UTC";

//   const formatter = new Intl.DateTimeFormat("en-CA", {
//     timeZone,
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   });

//   // Format to "YYYY-MM-DD"
//   const parts = formatter.formatToParts(date).reduce((acc, part) => {
//     if (part.type !== "literal") acc[part.type] = part.value;
//     return acc;
//   }, {});

//   return `${parts.year}-${parts.month}-${parts.day}`;
// }


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
