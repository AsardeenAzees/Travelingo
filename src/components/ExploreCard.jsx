export default function ExploreCard() {
  return (
    <div className="bg-[#292949] rounded-[26px] p-7 flex flex-col items-center h-full justify-between">
      <img
        src="/src/assets/explore-avatar.png"
        alt="Explore"
        className="w-24 h-32 object-contain mb-4"
        // Replace with your illustrated avatar PNG as shown in the prototype
      />
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-white font-semibold text-xl mb-2 text-center">
          Let’s Explore the beauty
        </h3>
        <p className="text-white/85 text-sm text-center mb-6">
          Get special offers &amp; news
        </p>
      </div>
      <button className="bg-[#29D697] text-white rounded-xl py-2 px-6 text-base font-semibold mt-auto">
        Join Now
      </button>
    </div>
  );
}
