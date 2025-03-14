import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({addMessage})=> {
    
  return (
    <div>
      <Navbar />

      
      <Outlet />
      
      <Footer addMessage = {addMessage}/>
    </div>
  );
}

export default Layout;