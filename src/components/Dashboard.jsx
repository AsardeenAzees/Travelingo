import Calendar from "./Calendar";
import Schedule from "./Schedule";
import BestDestinationList from "./BestDestinationList";
import ExploreCard from "./ExploreCard";
import DestinationCard from "./DestinationCard";

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
    <div className="flex">
      <div className="flex bg-[#F4F8F7] rounded-3xl shadow-xl p-8 min-h-[80vh]">
        <section className="flex-1">

          {/* HEADER AND SEARCH */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-semibold text-[32px] mb-1">Hello, Jemmy <span role="img" aria-label="wave">👋</span></h2>
              <p className="text-[#5E5E5E] text-[14px] font-semibold">Welcome back and explore the world</p>
            </div>

            {/* -- SEARCH BAR -- */}
            <form className="relative w-[282px] h-[59px]">
              <input
                type="text"
                placeholder="Search direction"
                className="w-full h-full pl-14 pr-4 py-2 rounded-[100px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
              />

              {/* Search Icon: you can also use react-icons here */}
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
          </div>


          <div className="flex gap-5 mb-8">
            {featuredTrips.map((trip, idx) => (
              <DestinationCard key={idx} {...trip} />
            ))}
          </div>

          {/* BELOW: Two-column grid for Best Destinations + Explore Card */}
          <div className="grid grid-cols-3 gap-6 w-178 h-[456px]">
            <div className="col-span-2">
              <BestDestinationList />
            </div>
            <div>
              <ExploreCard />
            </div>
          </div>


        </section>
      </div>
      <aside className="w-[350px] flex flex-col gap-7">
        <Calendar />
        <Schedule />
      </aside>

    </div>
  );
}
