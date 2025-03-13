import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/DashboardNavbar'
import DashboardNavbar from '../Dashboard/Sidebar';

function Dashboardlayout() {
    
  return (
    <div>
      <DashboardNavbar/>
      <Outlet />
      <Sidebar />
      
      
    </div>
  );
}

export default Dashboardlayout;