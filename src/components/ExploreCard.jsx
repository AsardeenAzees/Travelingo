export default function ExploreCard() {
  return (
    <div className="h-auto bg-[#292949] rounded-[26px] p-6 flex flex-col items-center justify-between">
      <img
        src="/src/assets/explore-avatar.png"
        alt="Explore"
        className="w-[184px] h-[206px] object-contain mb-4"
      />
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-white font-semibold text-[24px] mb-2 text-center">
          Let’s Explore the beauty
        </h3>
        <p className="text-white text-[14px] text-center mb-6">
          Get special offers &amp; news
        </p>
      </div>
      <button className="bg-[#17C58B] hover:bg-gray-300 hover:text-green-700 text-white rounded-[10px] py-2 px-6 text-base font-[14px] mt-auto h-[47px] w-[180px] cursor-pointer">
        Join Now
      </button>
    </div>
  );
}
