import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

function WebRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {isAuthenticated ? (
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route path="wallet" element={<Wallet />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="analysis" element={<Analysis />} />
                        <Route path="connect" element={<Connect />} />
                        <Route path="upload" element={<Upload />} />
                    </Route>
                ) : null}
            </Routes>
        </Router>
    );
}

export default WebRoutes;