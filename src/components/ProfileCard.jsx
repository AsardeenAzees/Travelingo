import { FiChevronDown } from "react-icons/fi";

export default function ProfileCard() {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-[59px] h-[59px] rounded-full border-2 border-green-400 object-cover mt-4"
        src="/src/assets/user-avatar.png"
        alt="Profile"
      />
      <div className="pl-3">
        <div className="font-semibold text-[#000000] leading-tight text-[18px] pt-4">Jemmy Max</div>
        <div className="text-[14px] text-[#000000] pt-1">Traveler Enthusiast</div>
      </div>

      {/* Dropdown with circle */}
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F4F8F7] ml-auto">
        <FiChevronDown className="text-gray-400 text-xl " />
      </div>
    </div>
  );
}
