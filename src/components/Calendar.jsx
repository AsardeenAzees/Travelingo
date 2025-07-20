const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function Calendar() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-2 px-1">
        <div className="text-lg font-semibold">May <span className="text-gray-400">2025</span></div>
        <div className="flex gap-1">
          <button className="w-7 h-7 rounded-md text-gray-400 hover:bg-gray-100 flex items-center justify-center">{"<"}</button>
          <button className="w-7 h-7 rounded-md text-gray-400 hover:bg-gray-100 flex items-center justify-center">{">"}</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs mb-1 px-1">
        {days.map((d) => (
          <div key={d} className="font-semibold text-gray-400 py-1 text-center">{d}</div>
        ))}
      </div>
      {/* Sample Calendar grid, you can make this dynamic if you want */}
      <div className="grid grid-cols-7 gap-1 text-xs px-1">
        {[...Array(35).keys()].map(i => {
          // Mark 20-23 as active
          const day = i - 3;
          const isActive = [20, 21, 22, 23].includes(day);
          return (
            <div
              key={i}
              className={`text-center py-1 rounded-md cursor-pointer ${
                isActive
                  ? "bg-green-200 text-green-800 font-bold"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {day > 0 && day < 32 ? day : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
