import React, { useEffect, useState } from 'react';
import { emptyBoard } from './Sudoku';
import SudokuBoard from './SudokuBoard';
import { solveSudoku } from '../../app/SolveSudoku';

const ViewSolution = ({ board = emptyBoard }) => {
    const [solvedBoard, setSolvedBoard] = useState(board); // Initialize with props
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function solve() {
            try {
                setLoading(true);
                setError(null);
                console.log("Initial board:", board);
                console.log("Type of board:", typeof board);
                const solved = await solveSudoku(board); // solveSudoku already makes a copy
                console.log("Solved board:", solved);
            console.log("Type of solved board:", typeof solved);
                setSolvedBoard(solved);
            } catch (err) {
                console.error("Failed to solve:", err);
                setError(err.message);
                setSolvedBoard(board); // Fallback to original board
            } finally {
                setLoading(false);
            }
        }
        
        solve();
    }, [board]); // Add board to dependencies if it can change

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <SudokuBoard
            board={solvedBoard}
            onCellClick={() => null}
            selectedCell={() => null}
            invalid={() => null}
            winner={false}
        />
    );
};

export default ViewSolution;