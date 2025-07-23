import { FiCalendar } from "react-icons/fi";

const scheduleList = [
  {
    title: "Crocked Forest",
    date: "20 may - 23 may",
    guests: 2,
    image: "/src/assets/moun1.png",
    avatars: [
      "/src/assets/avatar2.png",
      "/src/assets/avatar3.png"
    ]
  },
  {
    title: "Fem Waterfall",
    date: "20 may - 23 may",
    guests: 3,
    image: "/src/assets/waterfall1.png",
    avatars: [
      "/src/assets/avatar1.png",
      "/src/assets/avatar2.png",
      "/src/assets/avatar3.png"
    ]
  },
  {
    title: "Night Camping",
    date: "20 may - 23 may",
    guests: 2,
    image: "/src/assets/camp1.png",
    avatars: [
      "/src/assets/avatar1.png",
      "/src/assets/avatar2.png"
    ]
  }
];

export default function Schedule() {
  return (
    <div className="pl-2 pr-2 pt-6 pb-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[22px] font-semibold">My Schedule</h3>
        <div className="flex space-x-1">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      <div className="space-y-6">
        {scheduleList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-[30px] border border-[#E5E5E5] hover:shadow-md transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[90px] h-[90px] rounded-[14px] object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-[15px]">{item.title}</div>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <FiCalendar className="mr-1" />
                {item.date}
              </div>

              {item.guests > 0 && (
                <div className="flex items-center mt-2 gap-1">
                  {item.avatars?.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt="guest"
                      className="w-6 h-6 rounded-full border border-white -ml-1 first:ml-0"
                    />
                  ))}
                  <span className="text-green-500 text-sm font-semibold ml-1">
                    +{item.guests}
                  </span>
                </div>
              )}

              {item.guests === 0 && (
                <span className="text-green-500 text-sm font-semibold mt-2 inline-block">
                  +2
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
