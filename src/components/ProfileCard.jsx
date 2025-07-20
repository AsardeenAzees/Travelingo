export default function ProfileCard() {
    return (
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full border-2 border-green-400 object-cover"
          src="/assets/user-avatar.jpg"
          alt="Profile"
        />
        <div>
          <div className="font-bold leading-tight">Jemmy Max</div>
          <div className="text-xs text-gray-400">Traveler Enthusiast</div>
        </div>
      </div>
    );
  }
  