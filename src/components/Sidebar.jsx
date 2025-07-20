import {
    FiHome,
    FiCreditCard,
    FiHeart,
    FiMessageCircle,
    FiTrendingUp,
    FiSettings,
    FiLogOut,
} from 'react-icons/fi';

export default function Sidebar() {
    const navItems = [
        { label: 'Dashboard', icon: <FiHome />, active: true },
        { label: 'Ticket', icon: <FiCreditCard /> },
        { label: 'Favorite', icon: <FiHeart /> },
        { label: 'Message', icon: <FiMessageCircle /> },
        { label: 'Transaction', icon: <FiTrendingUp /> },
        { label: 'Setting', icon: <FiSettings /> },
    ];

    return (
        <aside className="w-[379px] flex flex-col min-h-screen bg-white shadow-lg">
            <h1 className="text-2xl font-semibold pt-16 ml-[85px] text-[32px]">Travelingo</h1>


            <nav className="flex flex-col items-start mt-10 ml-[85px]">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className={`flex items-center gap-3 w-[215px] h-[67px] px-6 py-3 mb-2 rounded-lg transition-all duration-200 text-[20px]
                ${item.active
                                ? 'bg-green-400 text-green-100 font-bold hover:bg-gray-300 hover:text-green-700 text-[20px]'
                                : 'text-gray-400 font-semibold hover:bg-gray-100 hover:text-green-700'
                            }`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        {item.label}
                    </button>
                ))}



            </nav>

            <div className="mt-8 ml-[35px]">
                <img
                    src="/src/assets/discount-card.png"
                    alt="Discount"
                    className="w-[265px] h-[265px] object-contain"
                />
            </div>

            <button className="mt-6 ml-[105px] mb-[30px] text-gray-500 text-[20px] font-semibold flex items-center gap-2 hover:text-red-600 transition-colors">
                <FiLogOut className="text-lg" />
                Log Out
            </button>
        </aside>
    );
}
