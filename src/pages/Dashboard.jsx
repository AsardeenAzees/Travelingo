import { useState } from "react";
import {
  FiHome,
  FiCreditCard,
  FiHeart,
  FiMessageCircle,
  FiTrendingUp,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiBell,
} from "react-icons/fi";

import Calendar from "/src/components/Calendar";
import Schedule from "/src/components/Schedule";
import BestDestinationList from "/src/components/BestDestinationList";
import ExploreCard from "/src/components/ExploreCard";
import DestinationCard from "/src/components/DestinationCard";
import ProfileCard from "/src/components/ProfileCard";

const featuredTrips = [
  {
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
    image: "/src/assets/mountain1.png",
  },
  {
    title: "Night camping",
    location: "Lightning lake",
    rating: 4.8,
    image: "/src/assets/nightcamp.png",
  },
  {
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
    image: "/src/assets/mountain2.png",
  },
];

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: <FiHome />, active: true },
    { label: "Ticket", icon: <FiCreditCard /> },
    { label: "Favorite", icon: <FiHeart /> },
    { label: "Message", icon: <FiMessageCircle /> },
    { label: "Transaction", icon: <FiTrendingUp /> },
    { label: "Setting", icon: <FiSettings /> },
  ];

  const renderSidebarNav = () => (
    <>
      <h1 className="text-2xl font-semibold text-[32px] mb-10 ml-6">Travelingo</h1>
      <nav className="flex flex-col gap-2 pl-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 w-[215px] h-[67px] px-6 py-3 rounded-[14px] transition text-[20px]
              ${
                item.active
                  ? "bg-green-400 text-white font-bold hover:bg-green-500"
                  : "text-gray-500 hover:bg-gray-100 font-semibold hover:text-green-700"
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
    <div className="flex flex-col lg:flex-row bg-white min-h-screen font-sans">

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <button onClick={() => setIsSidebarOpen(true)} className="text-2xl text-gray-600">
          <FiMenu />
        </button>
        <h1 className="ml-4 text-xl font-bold">Travelingo</h1>
      </div>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[270px] bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden p-6 pt-12`}
      >
        <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-xl text-gray-600">
          <FiX />
        </button>
        {renderSidebarNav()}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-full max-w-[300px] flex-col min-h-screen bg-white px-6 py-10">
        {renderSidebarNav()}
      </aside>

      {/* Dashboard content */}
      <main className="flex-1 mt-[60px] lg:mt-[30px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-10 px-4">

          <div className="absolute top-3 right-4 block lg:hidden z-50">
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition w-[42px] h-[42px] flex items-center justify-center" aria-label="Notifications">
              <FiBell className="text-xl text-[#5E5E5E]" />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs font-bold px-1.5 py-0.5 border-2 border-white">3</span>
          </div>

          <div className="block lg:hidden max-w-[75%] mt-10 lg:mt-0">
            <ProfileCard />
          </div>

          <div className="w-full lg:max-w-[75%] bg-[#F4F8F7] rounded-[44px] shadow-xl p-4 sm:p-6 lg:p-8">
            <section className="w-full">
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-4 mb-8">
                <div className="text-center lg:text-left">
                  <h2 className="font-semibold text-[28px] lg:text-[32px] mb-1">
                    Hello, Jemmy <span role="img" aria-label="wave">👋</span>
                  </h2>
                  <p className="text-[#5E5E5E] text-[14px] font-semibold">Welcome back and explore the world</p>
                </div>

                <form className="relative w-full max-w-xs lg:ml-12 lg:w-[282px] h-[48px]">
                  <input
                    type="text"
                    placeholder="Search direction"
                    className="w-full h-full pl-14 pr-4 py-2 rounded-[100px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </form>

                <div className="relative hidden sm:flex">
                  <button className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition w-[48px] h-[48px] flex items-center justify-center" aria-label="Notifications">
                    <FiBell className="text-xl text-[#5E5E5E]" />
                  </button>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs font-bold px-1.5 py-0.5 border-2 border-white">3</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center sm:justify-items-stretch mb-8">
                {featuredTrips.map((trip, idx) => (
                  <DestinationCard key={idx} {...trip} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 lg:w-[522px]">
                  <BestDestinationList />
                </div>
                <ExploreCard />
              </div>
            </section>
          </div>

          <aside className="w-full lg:max-w-[25%] flex flex-col gap-6 items-center lg:items-stretch">
            <div className="hidden sm:flex">
              <ProfileCard />
            </div>
            <Calendar />
            <Schedule />
          </aside>
        </div>
      </main>
    </div>
  );
}
