import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import MetaMaskLogo from '../../../assets/icons/metamask-fox.svg';

function StudentSignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        studentId: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        walletAddress: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                setError('Please install MetaMask to use this feature');
                return;
            }
            setLoading(true);
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            setFormData(prev => ({ ...prev, walletAddress: address }));
            setError('');
        } catch (err) {
            setError('Failed to connect wallet: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const generateStudentId = () => {
        return `STU${Date.now().toString(36).toUpperCase()}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const submissionData = {
            ...formData,
            studentId: generateStudentId()
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/register-student', submissionData);
            console.log('Registration successful:', response.data);
            navigate('/studentLogin');
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed');
            console.error('Registration error:', err);
        }
    };

    return (
        <main className="fixed w-full h-screen font-albulaRegular">
            <div className="flex flex-row justify-center items-center bg-white text-gray-900 rounded-[40px] h-full border-gray-400 shadow-inner">
                <section className='w-[800px] bg-white h-fit rounded-[40px] p-12 shadow-xl'>
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="font-albulaHeavy text-4xl text-slate-800">Student Sign Up</h1>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-albulaBold text-gray-600">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-albulaBold text-gray-600">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-albulaBold text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="password" className="block text-sm font-albulaBold text-gray-600">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-albulaBold text-gray-600">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <button
                                type="button"
                                onClick={connectWallet}
                                disabled={loading}
                                className="w-full mb-4 h-[50px] bg-orange-500 rounded-xl font-albulaBold uppercase text-white hover:bg-orange-600 transition-all duration-300 hover:drop-shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <img src={MetaMaskLogo} alt="MetaMask" className="w-6 h-6" />
                                {loading ? 'Connecting...' : (formData.walletAddress ? 'Wallet Connected' : 'Connect MetaMask')}
                            </button>
                        </div>

                        {formData.walletAddress && (
                            <div className="w-full bg-gray-50 p-3 rounded-xl">
                                <p className="text-sm text-gray-600 break-all">Connected: {formData.walletAddress}</p>
                            </div>
                        )}

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                className="w-full h-[50px] bg-[#8360ff] rounded-xl font-albulaBold uppercase text-white hover:bg-purple-700 transition-all duration-300 hover:drop-shadow-xl"
                            >
                                Create Account
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <NavLink to="/studentLogin" className="font-albulaMedium text-indigo-600 hover:text-indigo-500">
                                    Sign in
                                </NavLink>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default StudentSignUp;