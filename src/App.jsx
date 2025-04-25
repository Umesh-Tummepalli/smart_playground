import React from "react";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sudoku from "./components/Sudoku/Sudoku";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "tictactoe",
          element: <TicTacToe />,
        },
        {
          path: "sudoku/:difficulty/",
          element: <Sudoku />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
