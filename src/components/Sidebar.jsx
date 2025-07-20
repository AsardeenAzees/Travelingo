import { FiHome, FiCreditCard, FiHeart, FiMessageCircle, FiTrendingUp, FiSettings } from 'react-icons/fi';

export default function Sidebar() {

    const navItems = [
      { label: "Dashboard", icon: <FiHome />, active: true },
      { label: "Ticket", icon: <FiCreditCard /> },
      { label: "Favorite", icon: <FiHeart /> },
      { label: "Message", icon: <FiMessageCircle /> },
      { label: "Transaction", icon: <FiTrendingUp /> },
      { label: "Setting", icon: <FiSettings /> }
    ];
    

    return (
        <aside className="w-56 flex flex-col m-4 ml-10 min-h-screen items-center">
            <h1 className="text-2xl self-start font-bold p-6 pb-0 pt-12">Travelingo</h1>
            <nav className="flex-1 mt-18">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className={`flex items-center gap-3 w-46 px-6 py-3 mb-1 ${item.active
                                ? "bg-green-400 text-green-100 font-bold rounded-lg hover:bg-gray-300 hover:text-green-700"
                                : "text-gray-400 font-bold"
                            }`}
                    >
                        <span className="text-lg">{item.icon}</span>
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




