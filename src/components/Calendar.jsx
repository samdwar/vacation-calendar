import { useEffect, useState } from "react";
import { fetchHolidays } from "../api/holidays";
import { getWeeksInYear, toLocalDateString } from "./utils";
import MonthView from "./MonthView";
import QuarterView from "./QuarterView";

export default function Calendar({ year, countryCode, viewMode }) {
  const [weeks, setWeeks] = useState([]);
  const [holidayMap, setHolidayMap] = useState(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const holidayDates = await fetchHolidays(year, countryCode); // [{ date, name }]
        const holidayMap = new Map();

        for (const { date, name } of holidayDates) {
          if (!holidayMap.has(date)) holidayMap.set(date, []);
          holidayMap.get(date).push({ name });
        }

        const rawWeeks = getWeeksInYear(year); // No need for annotateWeeksWithHolidays
        setWeeks(rawWeeks);
        setHolidayMap(holidayMap);
      } catch (err) {
        console.error("Calendar fetch error:", err);
        setWeeks([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [year, countryCode]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!weeks.length) return <p className="text-center text-gray-500">No calendar data</p>;

  return viewMode === "monthly"
    ? <MonthView weeks={weeks} year={year} holidayMap={holidayMap} countryCode={countryCode} />
    : <QuarterView weeks={weeks} year={year} holidayMap={holidayMap} countryCode={countryCode} />;
}
