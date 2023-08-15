import {React , useState} from "react";
import SideBar from "../../Components/Layout/SideBar/SideBar";
import DashboardHeader from "../../Components/Layout/Header/DashboardHeader";
import { Link } from "react-router-dom";
import filter from "../../assets/HomeAssets/assets/images/filter.png";
import click from "../../assets/HomeAssets/assets/images/icon/click.png";
import account from "../../assets/HomeAssets/assets/images/icon/account.png";
import happyface from "../../assets/HomeAssets/assets/images/icon/happyface.png";
import Banknote from "../../assets/HomeAssets/assets/images/icon/Banknote.png";
import arrowdown from "../../assets/HomeAssets/assets/images/icon/arrow_down.png";
import arrowup from "../../assets/HomeAssets/assets/images/icon/arrow_up.png"; 
import MyLinks from "./MyLinks/MyLinks";

const Dashboard = () => {
  const [showFilterList, setShowFilterList] = useState(false);

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
  };
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <div className="content_inner">
            <DashboardHeader />
            <div className="dashboard-body">
              <div className="head_wrap d-flex align-items-center justify-content-between">
                <h1 className="f24 mb-0 text-white">Overview</h1>
                <div className="filter_icon">
                  <Link className="NavIcon mr-0 filterbtn" onClick={toggleFilterList}>
                    <img src={filter} alt="filter" />
                  </Link>
                  {showFilterList && (
                    <div className="filterList">
                      <ul>
                        <li><Link>Day</Link></li>
                        <li><Link>7 days</Link></li>
                        <li><Link>30 days</Link></li>
                        <li><Link>6 months</Link></li>
                        <li><Link>3 months</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="main_card_wrap">
                <div className="dashboard_box_detail d-flex align-items-center">
                  <span className="NavIcon bg_dark">
                    <img src={click} alt="filter" />
                  </span>
                  <div className="dashboard_info w-100">
                    <h5 className="f16 text-white">Clicks</h5>
                    <h5 className="f24 text-white d-flex w-100 align-items-center justify-content-between">
                      11,212{" "}
                      <img src={arrowdown} className="w-16" alt="arrowdown" />
                    </h5>
                  </div>
                </div>
                <div className="dashboard_box_detail d-flex align-items-center">
                  <span className="NavIcon bg_dark">
                    <img src={account} alt="account" />
                  </span>
                  <div className="dashboard_info w-100">
                    <h5 className="f16 text-white">Accounts</h5>
                    <h5 className="f24 text-white d-flex w-100 align-items-center justify-content-between">
                      814 <img src={arrowup} className="w-16" alt="arrowup" />
                    </h5>
                  </div>
                </div>
                <div className="dashboard_box_detail d-flex align-items-center">
                  <span className="NavIcon bg_dark">
                    <img src={happyface} alt="happyface" />
                  </span>
                  <div className="dashboard_info w-100">
                    <h5 className="f16 text-white">Retention</h5>
                    <h5 className="f24 text-white d-flex w-100 align-items-center justify-content-between">
                      29% <img src={arrowup} className="w-16" alt="arrowup" />
                    </h5>
                  </div>
                </div>
                <div className="dashboard_box_detail d-flex align-items-center">
                  <span className="NavIcon bg_dark">
                    <img src={Banknote} alt="Banknote" />
                  </span>
                  <div className="dashboard_info w-100">
                    <h5 className="f16 text-white">Profit</h5>
                    <h5 className="f24 text-white d-flex w-100 align-items-center justify-content-between">
                      $11,212{" "}
                      <img src={arrowup} className="w-16" alt="arrowup" />
                    </h5>
                  </div>
                </div>
              </div>

              <div className="MyLinks">
                <MyLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
