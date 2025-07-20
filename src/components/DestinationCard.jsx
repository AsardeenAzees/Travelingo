export default function DestinationCard({ title, location, rating, image }) {
    return (
      <div className="rounded-xl shadow bg-white relative overflow-hidden w-56 h-40">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-white font-semibold">{title}</h3>
          <div className="flex items-center text-gray-100 text-xs mt-1">
            <span>{location}</span>
            <span className="ml-auto">{rating} ★</span>
          </div>
        </div>
      </div>
    );
  }
  