const destinations = [
  { name: "Green wood forest", location: "Telangana", rating: 4.3, price: 999, image: "/src/assets/forest1.png" },
  { name: "Green forest Camp", location: "Channai", rating: 4.8, price: 999, image: "/src/assets/forest3.png" },
  { name: "Desert Festival", location: "Gujarat", rating: 4.8, price: 999, image: "/src/assets/forest2.png" },
];

import { FiMapPin } from "react-icons/fi";

export default function BestDestinationList() {
  return (
    <div className="bg-white p-6 rounded-[26px] shadow h-[440px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-[20px]">Best Destination 🌈</span>
          <span className="font-semibold text-[14px] text-[#5E5E5E] mt-1">100 Destination found</span>
        </div>


        <button className="px-4 py-1 rounded-lg border text-sm text-gray-500">Filters</button>
      </div>
      {destinations.map((d, idx) => (
        <div key={idx} className="flex items-center py-3">
          <img src={d.image} alt={d.name} className="w-[90px] h-[90px] rounded-md mr-3 object-cover" />
          <div className="flex-1">
            <div className="font-medium text-[16px]">{d.name}</div>
            <div className="flex items-center gap-4 mt-2 font-semibold text-[12px] text-[#9C9C9C] text-sm">
              <span className="flex items-center gap-1">
                <FiMapPin className="text-[#9C9C9C] text-base" />
                {d.location}
              </span>
              <span>★ {d.rating}</span>
            </div>
          </div>

          <div>
            <span className="font-semibold text-black text-[18px]">₹{d.price}</span>
            <span className="text-gray-400 text-[12px]">/night</span>
          </div>
        </div>
      ))}
    </div>
  );
}
