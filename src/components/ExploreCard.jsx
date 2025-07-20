export default function ExploreCard() {
    return (
      <div className="bg-[#292949] text-white p-6 rounded-xl flex flex-col justify-between h-full mb-3">
        <div>
          <div className="flex justify-center mb-3">
            {/* You can put an illustration or SVG here */}
            <div className="w-12 h-20 bg-gray-200 rounded-full bg-center mx-auto"></div>
          </div>
          <h3 className="text-lg font-bold mb-2">Let’s Explore the beauty</h3>
          <p className="text-white/80 text-sm mb-6">Get special offers & news</p>
        </div>
        <button className="bg-green-400 text-white px-4 py-2 rounded-xl font-semibold">
          Join Now
        </button>
      </div>
    );
  }
  