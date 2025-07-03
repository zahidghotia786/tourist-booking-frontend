import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminPanel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [readStatus, setReadStatus] = useState({});

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
            fetchAllUsers();
        }

        const savedReadStatus = localStorage.getItem('readStatus');
        if (savedReadStatus) {
            setReadStatus(JSON.parse(savedReadStatus));
        }
    }, []);

    useEffect(() => {
        if (Object.keys(readStatus).length > 0) {
            localStorage.setItem('readStatus', JSON.stringify(readStatus));
        }
    }, [readStatus]);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/admin/login', {
                email,
                password
            });

            if (response.status === 200) {
                setIsAuthenticated(true);
                localStorage.setItem('isAuthenticated', 'true');
                setError('');
                fetchAllUsers();
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    const fetchAllUsers = async () => {
        try {
            const users = await axios.get('http://localhost:3000/userData');
            setAllUsers(users.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const handleRead = (userId) => {
        setReadStatus(prevState => ({
            ...prevState,
            [userId]: true
        }));
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    if (isAuthenticated) {
        return (
            <div className="flex flex-col items-center w-screen h-max bg-gradient-to-r overflow-hidden">
                <div className="bg-white shadow-md rounded-lg p-8 w-full container mt-5 border">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
                        <div>
                            <Link to={'/'} className='text-lg font-semibold text-blue-500 hover:underline'>Home</Link>
                            <button onClick={handleLogout} className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Logout
                            </button>
                        </div>
                    </div>
                    <p className="mt-4 text-center text-lg">Welcome to the Admin Panel! 👋</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-2 sm:p-8 container mt-10 border">
                    <h2 className="text-3xl font-bold text-center text-gray-800 p-2 pb-5">All Visitors 👨‍👩‍👧‍👦</h2>
                    {allUsers.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Phone Number</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUsers.slice().reverse().map((user)=> (
                                        <tr key={user._id} className="border-t">
                                            <td className="px-4 py-2">{user.name}</td>
                                            <td className="px-4 py-2">
                                                <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">
                                                    {user.email}
                                                </a>
                                            </td>
                                            <td className="px-4 py-2">+{user.countrycode} {user.phone}</td>
                                            <td className="px-4 py-2">
                                                {readStatus[user._id] ? 'Read' : 'Unread'}
                                            </td>
                                            <td className="px-4 py-2">
                                                {!readStatus[user._id] && (
                                                    <button
                                                        onClick={() => handleRead(user._id)}
                                                        className="bg-blue-500 text-white px-2 text-[13px] py-2 rounded hover:bg-blue-600"
                                                    >
                                                        Mark as Read
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-lg text-center">There are no requests yet.</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
