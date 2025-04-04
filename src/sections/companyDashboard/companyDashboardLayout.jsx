import { Outlet } from 'react-router-dom';
import CompanyDashboardNavbar from './navigation/navigationBar';

function companyDashboardLayout() {
    return (
        <div className="flex">
            <div className="fixed left-0 w-[450px]">
                <CompanyDashboardNavbar />
            </div>

            <div className="ml-[450px] z-10">
                <Outlet />
            </div>
        </div>
    );
}

export default companyDashboardLayout;