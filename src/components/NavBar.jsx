

import { useState, useEffect } from "react"
import { Outlet, NavLink, useLocation,Link } from "react-router-dom"
import LandingPage from "./LandingPage"
import logo from "../app/vite.svg"
const NavBar = () => {
  const [visible, setVisible] = useState(false)
  const [expandSudoku, setExpandSudoku] = useState(false)
  const location = useLocation()

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (visible && !e.target.closest("nav") && !e.target.closest("button.menu-toggle")) {
        setVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [visible])

  // Difficulty levels based on the sudoku_data
  const sudokuDifficulties = [
    { path: "/sudoku/easy", name: "Easy", levels: 5 },
    { path: "/sudoku/medium", name: "Medium", levels: 5 },
    { path: "/sudoku/difficult", name: "Difficult", levels: 5 },
    { path: "/sudoku/expert", name: "Expert", levels: 5 },
    { path: "/sudoku/master", name: "Master", levels: 5 },
    { path: "/sudoku/extreme", name: "Extreme", levels: 5 },
  ]

  // Helper function to check if a Sudoku level is active
  const isSudokuLevelActive = (path, level) => {
    const searchParams = new URLSearchParams(location.search)
    const currentLevel = searchParams.get('level')
    return location.pathname === path && currentLevel === String(level)
  }

  return (
    <div className="text-white">
      {/* Overlay when sidebar is visible */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[5] transition-opacity duration-300"
          onClick={() => setVisible(false)}
        />
      )}

      <nav
        className={`fixed h-screen max-w-[320px] w-[85%] bg-[#1e2e38] top-0 left-0 transition-all duration-300 ease-in-out flex flex-col py-8 px-5 overflow-y-auto
          ${visible ? "translate-x-0 shadow-lg shadow-black/20" : "-translate-x-full"}
          z-10 border-r border-[#2c3f4c]`}
      >
        <div className="flex items-center justify-between mb-8 border-b border-[#2c3f4c] pb-4 ">
          <Link
          className="flex gap-2"
          to="/"
          >
            <img src={logo} width="35" alt="XO" className="inline"/>
          <h2 className="text-xl font-semibold text-[#00d3f1]"
          >
            Smart Playground</h2>
          </Link>
          <button className="text-white/70 hover:text-white transition-colors p-1" onClick={() => setVisible(false)}>
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <NavLink
          to="/tictactoe"
          className={({ isActive }) =>
            `flex items-center px-3 py-2.5 rounded-lg transition-colors ${
              isActive
                ? "bg-[#2c3f4c] text-[#00d3f1] font-medium"
                : "text-white hover:bg-[#2c3f4c]/50 hover:text-[#00d3f1]"
            }`
          }
        >
          <i className="ri-gamepad-line mr-3 text-lg"></i>
          <span>Tic-Tac-Toe</span>
        </NavLink>

        <div className="mt-4">
          <button
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
              expandSudoku ? "bg-[#2c3f4c] text-[#00d3f1]" : "text-white hover:bg-[#2c3f4c]/50 hover:text-[#00d3f1]"
            }`}
            onClick={() => setExpandSudoku(!expandSudoku)}
          >
            <div className="flex items-center">
              <i className="ri-sudoku-line mr-3 text-lg"></i>
              <span>Sudoku</span>
            </div>
            <i className={`ri-arrow-${expandSudoku ? "down" : "right"}-s-line transition-transform duration-200`}></i>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandSudoku ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 space-y-3 py-2">
              {sudokuDifficulties.map((difficulty) => (
                <div key={difficulty.name} className="mb-3">
                  <div className="text-sm font-medium text-white/80 mb-2 pl-2">{difficulty.name}</div>
                  <div className="grid grid-cols-3 gap-2 pl-2">
                    {Array.from({ length: difficulty.levels }, (_, i) => (
                      <NavLink
                        key={i}
                        to={`${difficulty.path}?level=${i + 1}`}
                        className={`flex items-center justify-center h-8 rounded transition-all ${
                          isSudokuLevelActive(difficulty.path, i + 1)
                            ? "bg-[#00d3f1]/20 text-[#00d3f1] border border-[#00d3f1]/30 font-medium"
                            : "bg-[#2c3f4c]/50 text-white/80 hover:bg-[#2c3f4c] hover:text-[#00d3f1]"
                        }`}
                      >
                        {i + 1}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-[#2c3f4c] text-xs text-white/50 text-center">
          <p>Game Center v1.0</p>
          <a href="https://www.linkedin.com/in/umesh-tummepalli-924362333/" target="_blank">Meet the developer</a>
        </div>
      </nav>

      <button
        className="menu-toggle fixed top-4 left-4 z-[3] w-10 h-10 flex items-center justify-center rounded-full bg-[#1e2e38] text-white shadow-lg transition-all hover:bg-[#2c3f4c]"
        onClick={() => setVisible((prev) => !prev)}
        aria-label={visible ? "Close menu" : "Open menu"}
      >
        {visible ? <i className="ri-close-line text-xl"></i> : <i className="ri-menu-line text-xl"></i>}
      </button>
      <Outlet />
    </div>
  )
}

export default NavBar