const destinations = [
  { name: "Green wood forest", location: "Telangana", rating: 4.3, price: 999, image: "/src/assets/forest1.png" },
  { name: "Green forest Camp", location: "Channai", rating: 4.8, price: 999, image: "/src/assets/forest3.png" },
  { name: "Desert Festival", location: "Gujarat", rating: 4.8, price: 999, image: "/src/assets/forest2.png" },
];

export default function BestDestinationList() {
  return (
    <div className="bg-white p-6 rounded-[26px] shadow h-[440px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="font-semibold font-[20px]">Best Destination 🌈</span>
          <span className="text-sm font-[12px] text-[#5E5E5E] mt-1">100 Destination found</span>
        </div>


        <button className="px-4 py-1 rounded-lg border text-sm text-gray-500">Filters</button>
      </div>
      {destinations.map((d, idx) => (
        <div key={idx} className="flex items-center py-3">
          <img src={d.image} alt={d.name} className="w-[90px] h-[90px] rounded-md mr-3 object-cover" />
          <div className="flex-1">
            <div className="font-medium font-[16px]">{d.name}</div>
            <div className="flex items-center gap-4 mt-2 font-semibold font-[12px] text-[#9C9C9C] text-sm">
              <span>{d.location}</span>
              <span>★ {d.rating}</span>
            </div>

          </div>

          <div className="font-semibold text-green-800 text-sm">₹{d.price}/night</div>
        </div>
      ))}
    </div>
  );
}
