"use client"

import { useState } from "react"
import { Link,Outlet } from "react-router-dom"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("ticTacToe")

  return (
    <div className="min-h-screen bg-[#0f1922] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e2e38] opacity-50 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #00d3f1 2px, transparent 0), radial-gradient(circle at 75px 75px, #00d3f1 2px, transparent 0)",
            backgroundSize: "100px 100px",
          }}
        ></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-1">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Challenge Your Mind with <span className="text-[#00d3f1]">Classic Games</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Play Tic-Tac-Toe and Sudoku puzzles with varying difficulty levels. Train your brain and have fun at the
              same time!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tictactoe"
                className="px-8 py-3 bg-[#00d3f1] text-[#0f1922] font-medium rounded-lg hover:bg-[#00d3f1]/90 transition-all transform hover:scale-105"
              >
                Play Tic-Tac-Toe
              </Link>
              <Link
                to="/sudoku/easy?level=1"
                className="px-8 py-3 bg-[#2c3f4c] text-white font-medium rounded-lg hover:bg-[#2c3f4c]/90 transition-all transform hover:scale-105"
              >
                Try Sudoku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 bg-[#0f1922]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-[#00d3f1]">Games</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            <div className="flex-1 bg-[#1e2e38] rounded-xl overflow-hidden shadow-lg transform transition-all hover:translate-y-[-5px]">
              <div className="h-48 bg-[#2c3f4c] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 w-32 h-32">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-[#1e2e38] flex items-center justify-center text-2xl font-bold">
                      {i % 3 === 0 ? "X" : i % 3 === 1 ? "O" : ""}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#00d3f1]">Tic-Tac-Toe</h3>
                <p className="text-white/70 mb-4">
                  The classic game of X's and O's. Challenge yourself against the computer or play with a friend.
                </p>
                <Link
                  to="/tictactoe"
                  className="inline-block px-4 py-2 bg-[#2c3f4c] text-white rounded-lg hover:bg-[#2c3f4c]/80 transition-colors"
                >
                  Play Now
                </Link>
              </div>
            </div>

            <div className="flex-1 bg-[#1e2e38] rounded-xl overflow-hidden shadow-lg transform transition-all hover:translate-y-[-5px]">
              <div className="h-48 bg-[#2c3f4c] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5 w-32 h-32">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-[#1e2e38] flex items-center justify-center text-sm font-bold">
                      <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                        {[...Array(9)].map((_, j) => (
                          <div key={j} className="bg-[#2c3f4c] flex items-center justify-center text-[8px]">
                            {Math.floor(Math.random() * 9) + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#00d3f1]">Sudoku</h3>
                <p className="text-white/70 mb-4">
                  Test your logical thinking with Sudoku puzzles of varying difficulty levels from Easy to Extreme.
                </p>
                <Link
                  to="/sudoku/easy?level=1"
                  className="inline-block px-4 py-2 bg-[#2c3f4c] text-white rounded-lg hover:bg-[#2c3f4c]/80 transition-colors"
                >
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Levels Section */}
      <section className="py-16 bg-[#1e2e38]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sudoku <span className="text-[#00d3f1]">Difficulty Levels</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Easy", description: "Perfect for beginners with more filled cells and simpler patterns." },
              { name: "Medium", description: "A balanced challenge that requires some logical thinking." },
              { name: "Difficult", description: "Tests your Sudoku skills with fewer starting numbers." },
              { name: "Expert", description: "For experienced players who enjoy a significant challenge." },
              { name: "Master", description: "Advanced puzzles requiring complex solving techniques." },
              { name: "Extreme", description: "The ultimate Sudoku challenge for true masters of the game." },
            ].map((level, index) => (
              <div
                key={index}
                className="bg-[#2c3f4c] p-6 rounded-lg shadow-md transform transition-all hover:translate-y-[-5px]"
              >
                <h3 className="text-xl font-bold mb-2 text-[#00d3f1]">{level.name}</h3>
                <p className="text-white/70 mb-4">{level.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-1 rounded-full ${i <= index ? "bg-[#00d3f1]" : "bg-[#1e2e38]"}`}
                      ></div>
                    ))}
                  </div>
                  <Link
                    to={`/sudoku/${level.name.toLowerCase()}?level=1`}
                    className="text-[#00d3f1] hover:underline text-sm"
                  >
                    Try Level 1 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 bg-[#0f1922]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to <span className="text-[#00d3f1]">Play</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg overflow-hidden">
                <button
                  className={`px-6 py-3 ${
                    activeTab === "ticTacToe" ? "bg-[#00d3f1] text-[#0f1922]" : "bg-[#2c3f4c] text-white"
                  }`}
                  onClick={() => setActiveTab("ticTacToe")}
                >
                  Tic-Tac-Toe
                </button>
                <button
                  className={`px-6 py-3 ${
                    activeTab === "sudoku" ? "bg-[#00d3f1] text-[#0f1922]" : "bg-[#2c3f4c] text-white"
                  }`}
                  onClick={() => setActiveTab("sudoku")}
                >
                  Sudoku
                </button>
              </div>
            </div>

            <div className="bg-[#1e2e38] rounded-xl p-6 md:p-8">
              {activeTab === "ticTacToe" ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#00d3f1]">Tic-Tac-Toe Rules</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-white/80">
                    <li>The game is played on a 3x3 grid.</li>
                    <li>Players take turns placing their mark (X or O) in empty squares.</li>
                    <li>
                      The first player to get three of their marks in a row (horizontally, vertically, or diagonally)
                      wins.
                    </li>
                    <li>If all squares are filled and no player has three in a row, the game ends in a draw.</li>
                  </ol>
                  <div className="mt-6">
                    <Link
                      to="/tictactoe"
                      className="inline-block px-6 py-3 bg-[#00d3f1] text-[#0f1922] font-medium rounded-lg hover:bg-[#00d3f1]/90 transition-all"
                    >
                      Start Playing
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#00d3f1]">Sudoku Rules</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-white/80">
                    <li>
                      Fill in the 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids
                      contains all of the digits from 1 to 9.
                    </li>
                    <li>The puzzle provides a partially completed grid.</li>
                    <li>Each puzzle has a unique solution.</li>
                    <li>Use logic to fill in the missing numbers - no guessing required!</li>
                    <li>Start with the easier levels and work your way up as you improve.</li>
                  </ol>
                  <div className="mt-6">
                    <Link
                      to="/sudoku/easy?level=1"
                      className="inline-block px-6 py-3 bg-[#00d3f1] text-[#0f1922] font-medium rounded-lg hover:bg-[#00d3f1]/90 transition-all"
                    >
                      Start Playing
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c3f4c]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#00d3f1]">Challenge</span> Yourself?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Choose your game and difficulty level from the menu and start playing now. Track your progress and improve
            your skills with each game!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tictactoe"
              className="px-8 py-3 bg-[#00d3f1] text-[#0f1922] font-medium rounded-lg hover:bg-[#00d3f1]/90 transition-all"
            >
              Play Tic-Tac-Toe
            </Link>
            <Link
              to="/sudoku/easy?level=1"
              className="px-8 py-3 bg-[#1e2e38] text-white font-medium rounded-lg hover:bg-[#1e2e38]/90 transition-all"
            >
              Try Sudoku
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1922] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-[#00d3f1]">Game Center</h3>
              <p className="text-white/60 text-sm">Challenge your mind with classic games</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Umesh-Tummepalli/smart_playground.git" target="_blank" className="text-white/60 hover:text-[#00d3f1] transition-colors">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/umesh-tummepalli-924362333/" target="_blank" className="text-white/60 hover:text-[#00d3f1] transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Outlet/>
    </div>
  )
}
