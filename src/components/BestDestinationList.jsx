import { useState } from "react";
import { FiMapPin, FiSliders } from "react-icons/fi";

const destinations = [
  { name: "Green wood forest", location: "Telangana", rating: 4.3, price: 999, image: "/src/assets/forest1.png" },
  { name: "Green forest Camp", location: "Channai", rating: 4.8, price: 999, image: "/src/assets/forest3.png" },
  { name: "Desert Festival", location: "Gujarat", rating: 4.8, price: 999, image: "/src/assets/forest2.png" },
];

export default function BestDestinationList() {
  const [showFilters, setShowFilters] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [location, setLocation] = useState("");

  const toggleFilters = () => setShowFilters(!showFilters);

  const filteredDestinations = destinations.filter(d =>
    d.rating >= minRating &&
    d.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-[26px] shadow h-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-[20px]">Best Destination 🌈</span>
          <span className="font-semibold text-[14px] text-[#5E5E5E] mt-1">
            {filteredDestinations.length} Destination found
          </span>
        </div>

        <button
          onClick={toggleFilters}
          className="flex items-center gap-2 px-4 py-1 w-[106px] h-[46px] rounded-[10px] border border-[#E5E5E5] text-[#777777] text-[18px] bg-white hover:bg-gray-50 transition cursor-pointer"
        >
          <FiSliders className="text-base" />
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-4 p-4 rounded-xl border bg-gray-50 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Minimum Rating</label>
            <input
              type="number"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              placeholder="e.g. 4.5"
              className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              min="0"
              max="5"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Gujarat"
              className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
        </div>
      )}

      {/* List of Destinations */}
      {filteredDestinations.map((d, idx) => (
        <div
          key={idx}
          className="flex items-center py-3 px-2 rounded-xl hover:bg-gray-100 cursor-pointer transition"
        >
          <img
            src={d.image}
            alt={d.name}
            className="w-[90px] h-[90px] rounded-md mr-3 object-cover"
          />
          <div className="flex-1">
            <div className="font-medium text-[16px]">{d.name}</div>
            <div className="flex items-center gap-6 mt-2 font-semibold text-[12px] text-[#9C9C9C]">
              <span className="flex items-center gap-1">
                <FiMapPin className="text-[#9C9C9C] text-base" />
                {d.location}
              </span>
              <span>★ {d.rating}</span>
            </div>
          </div>

          <div className="text-right">
            <span className="font-semibold text-black text-[18px]">₹{d.price}</span>
            <div className="text-gray-400 text-[12px]">/night</div>
          </div>
        </div>
      ))}
    </div>
  );
}
