import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import FlashcardList from './components/FlashcardList.jsx';
import Dashboard from './components/Dashboard.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-200 transition-colors duration-300">
                <div className="container mx-auto p-4">
                    <nav className="mb-8 flex justify-between items-center p-4 bg-blue-600 dark:bg-gray-800 rounded-lg shadow-lg">
                        <h1 className="hidden sm:block text-white text-xl font-bold dark:text-gray-200">
                            Flashcard Learning Tool
                        </h1>
                        <div className="w-full sm:w-fit flex items-center justify-between sm:space-x-4">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    isActive ? "text-white font-semibold underline dark:text-gray-200 text-xs sm:text-sm" : "text-white dark:text-gray-200 text-xs sm:text-sm"
                                }
                                end
                            >
                                Flashcards
                            </NavLink>
                            <NavLink 
                                to="/dashboard" 
                                className={({ isActive }) => 
                                    isActive ? "text-white font-semibold underline dark:text-gray-200 text-xs sm:text-sm" : "text-white dark:text-gray-200 text-xs sm:text-sm"
                                }
                            >
                                Dashboard
                            </NavLink>
                            <ThemeToggle />
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<FlashcardList />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
