import React from "react";

function NumberSelector({ handleSelectorClick, selectedNumber = null }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-full max-w-md mx-auto mt-4 bg-[#111a20] p-2 rounded-lg shadow-lg">
      <div className="grid grid-cols-9 gap-1 sm:gap-2">
        {numbers.map((number) => (
          <button
            key={number}
            className={`
              flex items-center justify-center
              aspect-square rounded
              text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium
              transition-all duration-150
              cursor-pointer
              ${
                selectedNumber === number
                  ? "bg-[#2a4d63] ring-2 ring-[#4a9eff] font-bold"
                  : "bg-[#1e2e38] hover:bg-[#263a47]"
              }
            `}
            onClick={() => handleSelectorClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NumberSelector;
