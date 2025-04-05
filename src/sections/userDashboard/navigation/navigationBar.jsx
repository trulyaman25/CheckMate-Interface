import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';

function DashboardNavbar() {
    const { logout } = useAuth0();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('studentData');
        if (data) {
            setStudentData(JSON.parse(data));
        }
    }, []);

    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    const handleLogout = () => {
        localStorage.clear();
        logout({ returnTo: window.location.origin });
    };

    return (
        <>
            <main className='bg-[#0F0D13ff] w-screen h-screen'>
                <nav className="w-[450px] h-screen flex flex-col justify-between bg-[#0F0D13ff] pb-7">
                    <div className='flex flex-col justify-center items-center p-16'>
                        <NavLink to={`/student/profile/${studentData?.studentId}`}>
                            <div className="w-40 h-40 rounded-full bg-[#8360ff] shadow-inner flex items-center justify-center mb-4 hover:bg-[#6536ff] transition-colors duration-300">
                                <span className='text-white text-8xl font-albulaHeavy'>
                                    {studentData && getInitial(studentData.firstName)}
                                </span>
                            </div>
                        </NavLink>
                        <h1 className='font-albulaBold text-white text-3xl mt-10'>
                            {studentData ? `${studentData.firstName} ${studentData.lastName}` : 'Loading...'}
                        </h1>
                        <h1 className='font-albulaRegular text-slate-300 text-base mt-2'>
                            {studentData?.email || 'Loading...'}
                        </h1>
                    </div>

                    <ul className="flex flex-col items-start space-y-10 text-white px-7 -mt-24">
                        <li className="w-full">
                            <NavLink to={`/student/dashboard/${studentData?.studentId}`} className={({ isActive }) => `flex items-center space-x-4 w-full transition ease-in-out ${isActive ? "text-[#9676ff]" : "hover:text-[#9676ff]"}`}>
                                <span className="font-albulaHeavy px-12 text-2xl">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to={`/student/wallet/${studentData?.studentId}`} className={({ isActive }) => `flex items-center space-x-4 w-full transition ease-in-out ${isActive ? "text-[#9676ff]" : "hover:text-[#9676ff]"}`}>
                                <span className="font-albulaHeavy px-12 text-2xl">Wallet</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to={`/student/upload/${studentData?.studentId}`} className={({ isActive }) => `flex items-center space-x-4 w-full transition ease-in-out ${isActive ? "text-[#9676ff]" : "hover:text-[#9676ff]"}`}>
                                <span className="font-albulaHeavy px-12 text-2xl">Upload</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to={`/student/profile/${studentData?.studentId}`} className={({ isActive }) => `flex items-center space-x-4 w-full transition ease-in-out ${isActive ? "text-[#9676ff]" : "hover:text-[#9676ff]"}`}>
                                <span className="font-albulaHeavy px-12 text-2xl">Profile</span>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink className="flex items-center space-x-4 w-full text-orange-400 hover:text-orange-600 transition ease-in-out duration-200" onClick={handleLogout}>
                                <span className="font-albulaHeavy px-12 text-2xl">Log Out</span>
                            </NavLink>
                        </li>
                    </ul>

                    <h1 className='text-slate-400 text-center font-albulaLight text-sm'>Made with love by Team Binary Bots ❤️</h1>
                </nav>
            </main>
        </>
    );
}

export default DashboardNavbar;