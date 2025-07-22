import Calendar from "./Calendar";
import Schedule from "./Schedule";
import BestDestinationList from "./BestDestinationList";
import ExploreCard from "./ExploreCard";
import DestinationCard from "./DestinationCard";
import ProfileCard from "./ProfileCard";
import { FiBell } from "react-icons/fi";

const featuredTrips = [
  {
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
    image: "/src/assets/mountain1.png"
  },
  {
    title: "Night camping",
    location: "Lightning lake",
    rating: 4.8,
    image: "/src/assets/nightcamp.png"
  },
  {
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
    image: "/src/assets/mountain2.png"
  }
];

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-10 px-4"> {/* 🔧 Make layout stack on mobile */}
      
      {/* Main Section */}
      <div className="w-full lg:max-w-[75%] bg-[#F4F8F7] rounded-[44px] shadow-xl p-4 sm:p-6 lg:p-8"> {/* 🔧 Responsive padding and width */}
        <section className="w-full">

          {/* Header + Search */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-4 mb-8"> {/* 🔧 stack and center */}
            <div className="text-center lg:text-left">
              <h2 className="font-semibold text-[28px] lg:text-[32px] mb-1">
                Hello, Jemmy <span role="img" aria-label="wave">👋</span>
              </h2>
              <p className="text-[#5E5E5E] text-[14px] font-semibold">Welcome back and explore the world</p>
            </div>

            {/* Search Bar */}
            <form className="relative w-full max-w-xs lg:ml-12 lg:w-[282px] h-[48px]">
              <input
                type="text"
                placeholder="Search direction"
                className="w-full h-full pl-14 pr-4 py-2 rounded-[100px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </form>

            {/* Bell */}
            <div className="relative">
              <button
                className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition w-[48px] h-[48px] flex items-center justify-center"
                aria-label="Notifications"
              >
                <FiBell className="text-xl text-[#5E5E5E]" />
              </button>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs font-bold px-1.5 py-0.5 border-2 border-white">
                3
              </span>
            </div>
          </div>

          {/* Featured Trips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center sm:justify-items-stretch mb-8">
            {featuredTrips.map((trip, idx) => (
              <DestinationCard key={idx} {...trip} />
            ))}
          </div>

          {/* Best Destination + Explore */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:w-[522px]">
              <BestDestinationList />
            </div>
            
            <ExploreCard />
          </div>

        </section>
      </div>

      {/* Sidebar Section */}
      <aside className="w-full lg:max-w-[28%] flex flex-col gap-6 items-center lg:items-stretch">
        <ProfileCard />
        <Calendar />
        <Schedule />
      </aside>

    </div>
  );
}
