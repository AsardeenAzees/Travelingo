import { FiMapPin } from "react-icons/fi";


export default function DestinationCard({ title, location, rating, image }) {
  return (
    <div className="rounded-[26px] shadow bg-white relative overflow-hidden w-56 h-80">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="p-6 absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-white font-semibold">{title}</h3>
        <div className="flex items-center text-gray-100 text-xs mt-1">
          <span className="flex items-center gap-1">
            <FiMapPin className="text-white text-base" />
            {location}
          </span>
          <span className="ml-auto">{rating} ★</span>
        </div>
      </div>
    </div>
  );
}
