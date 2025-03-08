import React, { useState } from "react";

interface DhikrCount {
  name: string;
  arabic: string;
  count: number;
  lastUpdated: string;
}

export const DhikrTracker: React.FC = () => {
  const [dhikrCounts, setDhikrCounts] = React.useState<DhikrCount[]>([]);
  const [sortField, setSortField] = useState<keyof DhikrCount>("lastUpdated");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  React.useEffect(() => {
    // Load all dhikr counts from localStorage
    const loadDhikrCounts = () => {
      const storedCounts: DhikrCount[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith("dhikr_")) {
          try {
            const storedData = localStorage.getItem(key);
            if (storedData) {
              const data = JSON.parse(storedData);
              if (data.count > 0) {
                // Only add items with count > 0
                storedCounts.push(data);
              }
            }
          } catch (error) {
            console.error("Error loading dhikr count:", error);
          }
        }
      }
      sortDhikrCounts(storedCounts);
    };

    const sortDhikrCounts = (counts: DhikrCount[]) => {
      const sorted = [...counts].sort((a, b) => {
        if (sortField === "lastUpdated") {
          return sortDirection === "desc"
            ? new Date(b.lastUpdated).getTime() -
                new Date(a.lastUpdated).getTime()
            : new Date(a.lastUpdated).getTime() -
                new Date(b.lastUpdated).getTime();
        }
        if (sortField === "count") {
          return sortDirection === "desc"
            ? b.count - a.count
            : a.count - b.count;
        }
        return sortDirection === "desc"
          ? b[sortField].localeCompare(a[sortField])
          : a[sortField].localeCompare(b[sortField]);
      });
      setDhikrCounts(sorted);
    };

    loadDhikrCounts();
    window.addEventListener("storage", loadDhikrCounts);
    return () => window.removeEventListener("storage", loadDhikrCounts);
  }, [sortField, sortDirection]);

  const handleSort = (field: keyof DhikrCount) => {
    setSortDirection(
      sortField === field && sortDirection === "desc" ? "asc" : "desc"
    );
    setSortField(field);
  };

  const getSortIcon = (field: keyof DhikrCount) => {
    if (sortField !== field) return "↕️";
    return sortDirection === "desc" ? "↓" : "↑";
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-start p-8 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-stone-800 mb-8 text-center">
          Your Dhikr Journey
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-100">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider cursor-pointer hover:bg-stone-200"
                  onClick={() => handleSort("arabic")}
                >
                  Arabic {getSortIcon("arabic")}
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider cursor-pointer hover:bg-stone-200"
                  onClick={() => handleSort("name")}
                >
                  Transliteration {getSortIcon("name")}
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider cursor-pointer hover:bg-stone-200"
                  onClick={() => handleSort("count")}
                >
                  Count {getSortIcon("count")}
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider cursor-pointer hover:bg-stone-200"
                  onClick={() => handleSort("lastUpdated")}
                >
                  Last Updated {getSortIcon("lastUpdated")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-200">
              {dhikrCounts.map((dhikr, index) => (
                <tr key={index} className="hover:bg-stone-50">
                  <td className="px-6 py-4 whitespace-nowrap text-xl font-arabic text-stone-800">
                    {dhikr.arabic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                    {dhikr.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">
                    {dhikr.count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                    {new Date(dhikr.lastUpdated).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {dhikrCounts.length === 0 && (
          <div className="text-center text-stone-500 mt-8">
            No active dhikr counts yet. Start your journey by using the Tasbeeh
            counter!
          </div>
        )}
      </div>
    </div>
  );
};
