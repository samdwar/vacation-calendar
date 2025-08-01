import { useEffect, useState } from 'react';
import Calendar from './components/Calendar';

import { fetchHolidays } from './api/holidays';
import { toLocalDateString } from './components/utils';

function App() {
  const [year, setYear] = useState(2025);
  const [country, setCountry] = useState("IN");
  const [viewMode, setViewMode] = useState("monthly");
  const [holidayMap, setHolidayMap] = useState(new Map());

  useEffect(() => {
    async function loadHolidays() {
      const holidayDates = await fetchHolidays(year, country);
      const map = new Map();
      for (const { date, name } of holidayDates) {
        if (!map.has(date)) map.set(date, []);
        map.get(date).push({ name });
      }
      setHolidayMap(map);
    }
    loadHolidays();
  }, [year, country]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">🌴 Vacation Calendar</h1>

      <div className="flex gap-4 justify-center mb-6">
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="border px-2 py-1">
          <option value="IN">India</option>
          <option value="US">USA</option>
          <option value="GB">UK</option>
          <option value="FR">France</option>
        </select>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="border px-2 py-1 w-24"
        />
        <select value={viewMode} onChange={(e) => setViewMode(e.target.value)} className="border px-2 py-1">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>

      <Calendar year={year} countryCode={country} viewMode={viewMode} />
    </div>
  );
}

export default App;