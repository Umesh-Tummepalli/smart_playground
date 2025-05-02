import React from "react";

const InitialValueChangeError = () => {
  return (
    <div
      id="sudoku-alert"
      className="fixed top-0 left-1/2 z-50 transform -translate-x-1/2 mt-4 max-w-sm w-[90%] bg-red-500 text-white text-sm px-4 py-3 rounded-xl shadow-lg transition-all duration-500 ease-in-out sudoku-alert-show"
    >
      🚫 You can't change the initial Sudoku values!
    </div>
  );
};
export default InitialValueChangeError;
