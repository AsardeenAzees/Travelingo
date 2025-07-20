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
    image: "/assets/mountain1.jpg"
  },
  {
    title: "Night camping",
    location: "Lightning lake",
    rating: 4.8,
    image: "/assets/nightcamp.jpg"
  },
  {
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
    image: "/assets/mountain2.jpg"
  }
];

export default function Dashboard() {
  return (
    <div className="flex gap-8">
      <section className="flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Hello, Jemmy 👋</h2>
          <p className="text-gray-400 text-sm">Welcome back and explore the world</p>
        </div>
        <div className="flex gap-5 mb-8">
          {featuredTrips.map((trip, idx) => (
            <DestinationCard key={idx} {...trip} />
          ))}
        </div>
        <BestDestinationList />
      </section>
      <aside className="w-[350px] flex flex-col gap-7">
        <Calendar />
        <Schedule />
        <ExploreCard />
      </aside>
    </div>
  );
}
