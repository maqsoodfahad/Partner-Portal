import React, { useState } from 'react';
import logo from '../../../assets/HomeAssets/assets/images/logo.png';
import dashboard from '../../../assets/HomeAssets/assets/images/SideBar/Dashboard.png';
import setting from '../../../assets/HomeAssets/assets/images/SideBar/setting.png';
import gethelp from '../../../assets/HomeAssets/assets/images/SideBar/gethelp.png';
import Billing from '../../../assets/HomeAssets/assets/images/SideBar/Billing.png';
import Logout from '../../../assets/HomeAssets/assets/images/SideBar/Logout.png'; 
import { Link, Route, useLocation } from 'react-router-dom';
 
const SideBar = () => { 
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };
    return (
      <>
        <nav id="sidebar">
      <div className='SideBar_inner'>
        <div className='siderBar-header text-center'>
          <img src={logo} alt='logo' />
        </div>
        <div className='SideBar-list'>
          <ul>
            <li>
              <Link to="/dashboard" className={activeLink === '/dashboard' ? 'active' : ''} onClick={() => handleLinkClick('/dashboard')}>
                <img src={dashboard} alt='dashboard' /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/settings" className={activeLink === '/settings' ? 'active' : ''} onClick={() => handleLinkClick('/settings')}>
                <img src={setting} alt='setting' /> Settings
              </Link>
            </li>
            <li>
              <Link to="/gethelp" className={activeLink === '/gethelp' ? 'active' : ''} onClick={() => handleLinkClick('/gethelp')}>
                <img src={gethelp} alt='gethelp' /> Get help
              </Link>
            </li>
            <li>
              <Link to="/billing" className={activeLink === '/billing' ? 'active' : ''} onClick={() => handleLinkClick('/billing')}>
                <img src={Billing} alt='Billing' /> Billing
              </Link>
            </li>
            <li>
              <Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>
                <img src={Logout} alt='Logout' /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </>
    );
  };
  
  export default SideBar;