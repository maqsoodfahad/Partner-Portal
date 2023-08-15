import React from 'react'
import SideBar from '../../../Components/Layout/SideBar/SideBar'
import DashboardHeader from '../../../Components/Layout/Header/DashboardHeader' 
import Banknote from "../../../assets/HomeAssets/assets/images/icon/Banknote.png";  
import setting from "../../../assets/HomeAssets/assets/images/icon/setting.png"; 
import { Link } from 'react-router-dom';
import PayoutHistory from './PayoutHistory/PayoutHistory';


const Billing = () => {
  return (
    <>
       <div className="wrapper">  
              <SideBar/> 
          <div id="content">  
            <div className='content_inner'> 
               <DashboardHeader/>
              <div className='dashboard-body'>
                  <h1 className='f48 mb-0 text-white'>Billing </h1>

                  <div className="main_card_wrap mt-32">
                    <div className="dashboard_box_detail Billing_card w-352 d-flex align-items-center">
                      <span className="NavIcon bg_dark">
                        <img src={Banknote} alt="Banknote" />
                      </span>
                      <div className="dashboard_info w-100">
                        <h5 className="f16  text-white d-flex w-100 align-items-center justify-content-between">Current Balance 
                        <Link to="/settings"><img src={setting} className=" " alt="arrowdown" /></Link></h5>
                        <h5 className="f36 text-white current-text mt-2">  $11,212 </h5>
                        <p className='f16 mt-2 mb-0'>Upcoming Payout Date: July 15, 2023</p>
                      </div>
                    </div>  
                    <div className="dashboard_box_detail Billing_card w-352 d-flex align-items-center">
                      <span className="NavIcon bg_dark">
                        <img src={Banknote} alt="Banknote" />
                      </span>
                      <div className="dashboard_info w-100">
                        <h5 className="f16  txt-lit d-flex w-100 align-items-center justify-content-between">Current Balance  </h5>
                        <h5 className="f36 txt-lit  mt-2"><b>  $11,212 </b></h5>
                        <p className='f16 mt-2 mb-0 txt-lit'>As of June 30, 2023</p>
                      </div>
                    </div> 
                 </div>
                 <div className='payment-wrap'>
                   <PayoutHistory />
                 </div>
              </div>
            </div>
	        </div>
      </div>
    </>
  )
}

export default Billing