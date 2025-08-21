import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Home from './sections/home/home';
import DashboardLayout from './sections/dashboard/dashboardLayout';
import Wallet from './sections/dashboard/pages/wallet/wallet';
import Profile from './sections/dashboard/pages/profile/profile';
import Analysis from './sections/dashboard/pages/analysis/analysis';
import Upload from './sections/dashboard/pages/upload/upload';
import Header from './components/navigation/header/header';
import Footer from './components/navigation/footer/footer';

function ConditionalHeader() {
    const location = useLocation();
    const headerPaths = ["/", "/about", "/team"];
    const showHeader = headerPaths.includes(location.pathname);
    
    return showHeader ? <Header /> : null;
}

function ConditionalFooter() {
    const location = useLocation();
    const footerPaths = ["/", "/about", "/team"];
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
                {isAuthenticated ? (
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route path="wallet" element={<Wallet />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="analysis" element={<Analysis />} />
                        <Route path="upload" element={<Upload />} />
                    </Route>
                ) : null}
            </Routes>
            
            <ConditionalFooter />
        </Router>
    );
}

export default WebRoutes;