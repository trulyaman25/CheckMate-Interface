import { Outlet } from 'react-router-dom';
import UserDashboardNavbar from './navigation/navigationBar';

function UserDashboardLayout() {
    return (
        <div className="flex">
            <div className="fixed left-0 w-[450px]">
                <UserDashboardNavbar />
            </div>

            <div className="ml-[450px] z-10">
                <Outlet />
            </div>
        </div>
    );
}

export default UserDashboardLayout;