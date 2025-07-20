const trips = [
    {
      title: "Crocked Forest",
      date: "20 may - 23 may",
      participants: 2,
      image: "/assets/schedule1.jpg"
    },
    {
      title: "Fem Waterfall",
      date: "20 may - 23 may",
      participants: 2,
      image: "/assets/schedule2.jpg"
    },
    {
      title: "Night Camping",
      date: "20 may - 23 may",
      participants: 2,
      image: "/assets/schedule3.jpg"
    }
  ];
  
  export default function Schedule() {
    return (
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <div className="font-semibold mb-4">My Schedule</div>
        <div className="flex flex-col gap-4">
          {trips.map((t, idx) => (
            <div key={idx} className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
              <img src={t.image} alt={t.title} className="w-10 h-10 rounded-md object-cover mr-3" />
              <div className="flex-1">
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-gray-400">{t.date}</div>
              </div>
              <div className="flex items-center">
                {/* Fake participant avatars, can use static img or icons */}
                {[...Array(t.participants).keys()].map(i => (
                  <span key={i} className="w-7 h-7 rounded-full border-2 border-white bg-green-200 inline-block -ml-2"></span>
                ))}
                <span className="ml-2 text-green-400 font-bold text-xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  