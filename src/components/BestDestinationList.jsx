const destinations = [
    { name: "Green wood forest", location: "Telangana", rating: 4.3, price: 999, image: "/assets/forest1.jpg" },
    { name: "Green forest Camp", location: "Channai", rating: 4.8, price: 999, image: "/assets/forest2.jpg" },
    { name: "Desert Festival", location: "Gujarat", rating: 4.8, price: 999, image: "/assets/desert.jpg" },
  ];
  
  export default function BestDestinationList() {
    return (
      <div className="bg-white p-4 rounded-[26px] shadow h-[456px]">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Best Destination 🌈</span>
          <button className="px-4 py-1 rounded-lg border text-sm text-gray-500">Filters</button>
        </div>
        {destinations.map((d, idx) => (
          <div key={idx} className="flex items-center py-2 border-b last:border-none">
            <img src={d.image} alt={d.name} className="w-10 h-10 rounded-md mr-3 object-cover" />
            <div className="flex-1">
              <div className="font-medium">{d.name}</div>
              <div className="text-xs text-gray-400">{d.location}</div>
            </div>
            <div className="text-yellow-600 font-semibold text-sm mr-3">{d.rating} ★</div>
            <div className="font-semibold text-green-800 text-sm">₹{d.price}/night</div>
          </div>
        ))}
      </div>
    );
  }
  