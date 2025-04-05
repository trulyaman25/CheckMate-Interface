import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Home from './sections/home/home';
import Wallet from './sections/userDashboard/pages/wallet/wallet';
import Profile from './sections/userDashboard/pages/profile/profile';
import Analysis from './sections/userDashboard/pages/analysis/analysis';
import Upload from './sections/userDashboard/pages/upload/upload';
import Header from './components/navigation/header/header';
import Footer from './components/navigation/footer/footer';
import StudentSignIn from './sections/auth/studentAuth/studentSignIn';
import StudentSignUp from './sections/auth/studentAuth/studentSignUp';

import CompanySignIn from './sections/auth/companyAuth/companySignIn';
import CompanySignUp from './sections/auth/companyAuth/companySignUp';

import UserDashboardLayout from './sections/userDashboard/userdashboardLayout';

function ConditionalHeader() {
    const location = useLocation();
    const headerPaths = ["/"];
    const showHeader = headerPaths.includes(location.pathname);
    
    return showHeader ? <Header /> : null;
}

function ConditionalFooter() {
    const location = useLocation();
    const footerPaths = ["/"];
    const showFooter = footerPaths.includes(location.pathname);

    return showFooter ? <Footer /> : null;
}

function WebRoutes() {
    const { isAuthenticated } = useAuth0();

    return (
        <Router>
            <ConditionalHeader />
            
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="studentLogin" element={<StudentSignIn/>}/>
                <Route path="studentRegistration" element={<StudentSignUp/>}/>
                <Route path="companyLogin" element={<CompanySignIn/>}/>
                <Route path="companyRegister" element={<CompanySignIn/>}/>

                <Route path="/student" element={<UserDashboardLayout />}>
                    <Route path="wallet/:studentId" element={<Wallet />} />
                    <Route path="profile/:studentId" element={<Profile />} />
                    <Route path="dashboard/:studentId" element={<Analysis />} />
                    <Route path="upload/:studentId" element={<Upload />} />
                </Route>
            </Routes>
            
            <ConditionalFooter />
        </Router>
    );
}

export default WebRoutes;