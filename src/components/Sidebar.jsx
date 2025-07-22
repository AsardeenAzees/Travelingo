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
      <aside className="hidden lg:flex w-full max-w-[300px] flex-col min-h-screen bg-white px-6 py-10">
        <h1 className="text-2xl font-semibold text-[32px] mb-10 ml-6">Travelingo</h1>
  
        <nav className="flex flex-col gap-2 pl-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-[215px] h-[67px] px-6 py-3 rounded-[14px] transition text-[20px]
                ${item.active
                  ? 'bg-green-400 text-white font-bold hover:bg-green-500 text-[20px]'
                  : 'text-gray-500 hover:bg-gray-100 font-semibold hover:text-green-700 '
                }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
  
        <div className="mt-8">
          <img
            src="/src/assets/discount-card.png"
            alt="Discount"
            className="w-full max-w-[220px] h-auto object-contain"
          />
        </div>
  
        <button className="mt-3 ml-12 text-gray-500 text-[20px]  font-semibold flex items-center gap-3 hover:text-red-600 transition-colors cursor-pointer">
          <FiLogOut className="text-lg" />
          Log Out
        </button>
      </aside>
    );
  }
  