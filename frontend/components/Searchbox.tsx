import React from "react";
import { Search, Bell, CalendarDays } from "lucide-react";
const Searchbox = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-3 bg-white border-b border-gray-100">
      {/* Search Box */}
      <div className="flex items-center w-full max-w-md px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus-within:border-gray-700 focus-within:ring-2 focus-within:ring-purple-100 transition">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search patients, doctors..."
          className="w-full ml-3 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-5 ml-6">
        <button className="text-gray-500 hover:text-gray-700">
          <Bell size={19} />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <CalendarDays size={19} />
        </button>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
            A
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-800">
              Anurag Hom Roy
            </p>
            <p className="text-xs text-gray-400">
              -----------------------------------
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Searchbox;