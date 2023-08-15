import React, { useState } from 'react';
import SideBar from '../../../Components/Layout/SideBar/SideBar';
import DashboardHeader from '../../../Components/Layout/Header/DashboardHeader';
import Basic from './Basic/Basic';
import Address from './Address/Address';
import Payments from './Payments/Payments';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Basic');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <div className="content_inner">
            <DashboardHeader />
            <div className="dashboard-body">
              <h1 className="f48 mb-0 text-white">Settings</h1>
              <div className="tabs-body">
                <ul className="nav nav-pills justify-content-center" id="Settings" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'Basic' ? 'active' : ''}`}
                      onClick={() => handleTabClick('Basic')}
                      type="button"
                      role="tab"
                      aria-controls="pills-Basic"
                      aria-selected={activeTab === 'Basic'}
                    >
                      Basic info
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'Address' ? 'active' : ''}`}
                      onClick={() => handleTabClick('Address')}
                      type="button"
                      role="tab"
                      aria-controls="pills-Address"
                      aria-selected={activeTab === 'Address'}
                    >
                      Address
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link mr-0 ${activeTab === 'Payments' ? 'active' : ''}`}
                      onClick={() => handleTabClick('Payments')}
                      type="button"
                      role="tab"
                      aria-controls="pills-Payments"
                      aria-selected={activeTab === 'Payments'}
                    >
                      Payments
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="SettingsContent">
                  <div
                    className={`tab-pane Basic_wrap fade show ${activeTab === 'Basic' ? 'active' : ''}`}
                    id="pills-Basic"
                    role="tabpanel"
                    aria-labelledby="pills-Basic-tab"
                  >
                    <Basic />
                  </div>
                  <div
                    className={`tab-pane fade show ${activeTab === 'Address' ? 'active' : ''}`}
                    id="pills-Address"
                    role="tabpanel"
                    aria-labelledby="pills-Address-tab"
                  >
                     <Address />
                  </div>
                  <div
                    className={`tab-pane fade show ${activeTab === 'Payments' ? 'active' : ''}`}
                    id="pills-Payments"
                    role="tabpanel"
                    aria-labelledby="pills-Payments-tab"
                  >
                     <Payments />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
