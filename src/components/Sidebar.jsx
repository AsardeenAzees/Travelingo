export default function Sidebar() {
    const navItems = [
      { label: "Dashboard", active: true },
      { label: "Ticket" },
      { label: "Favorite" },
      { label: "Message" },
      { label: "Transaction" },
      { label: "Setting" }
    ];
  
    return (
      <aside className="w-56 flex flex-col bg-white rounded-xl m-4 shadow min-h-screen">
        <h1 className="text-xl font-bold p-6 pb-0">Travelingo</h1>
        <nav className="flex-1 mt-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center w-full px-6 py-3 mb-1 ${
                item.active ? "bg-green-100 text-green-700 font-semibold rounded-lg" : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="m-6 bg-green-50 p-4 rounded-lg text-green-700">
          <p className="font-bold text-lg">50% Discount</p>
          <span className="text-sm block mt-1">Get a discount on certain days and don’t miss it.</span>
        </div>
        <button className="m-6 mt-0 text-gray-500 text-sm">Log Out</button>
      </aside>
    );
  }
  