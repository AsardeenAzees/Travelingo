import { useState } from 'react';
import {
  FiHome,
  FiCreditCard,
  FiHeart,
  FiMessageCircle,
  FiTrendingUp,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX
} from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', icon: <FiHome />, active: true },
    { label: 'Ticket', icon: <FiCreditCard /> },
    { label: 'Favorite', icon: <FiHeart /> },
    { label: 'Message', icon: <FiMessageCircle /> },
    { label: 'Transaction', icon: <FiTrendingUp /> },
    { label: 'Setting', icon: <FiSettings /> },
  ];

  const renderNav = () => (
    <>
      <h1 className="text-2xl font-semibold text-[32px] mb-10 ml-6">Travelingo</h1>

      <nav className="flex flex-col gap-2 pl-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 w-[215px] h-[67px] px-6 py-3 rounded-[14px] transition text-[20px]
              ${item.active
                ? 'bg-green-400 text-white font-bold hover:bg-green-500'
                : 'text-gray-500 hover:bg-gray-100 font-semibold hover:text-green-700'
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 pl-6">
        <img
          src="/src/assets/discount-card.png"
          alt="Discount"
          className="w-full max-w-[220px] h-auto object-contain"
        />
      </div>

      <button className="mt-6 ml-12 text-gray-500 text-[20px] font-semibold flex items-center gap-3 hover:text-red-600 transition-colors cursor-pointer">
        <FiLogOut className="text-lg" />
        Log Out
      </button>
    </>
  );

  return (
    <>
      <div className="lg:hidden flex items-center p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <button onClick={() => setIsOpen(true)} className="text-2xl text-gray-600">
          <FiMenu />
        </button>
        <h1 className="ml-4 text-xl font-bold">Travelingo</h1>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[270px] bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden p-6 pt-12`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-xl text-gray-600">
          <FiX />
        </button>
        {renderNav()}
      </aside>

      <aside className="hidden lg:flex w-full max-w-[300px] flex-col min-h-screen bg-white px-6 py-10">
        {renderNav()}
      </aside>
    </>
  );
}
