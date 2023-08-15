import React from 'react'
import SideBar from '../../../Components/Layout/SideBar/SideBar'
import DashboardHeader from '../../../Components/Layout/Header/DashboardHeader'

const Gethelp = () => {
  return (
    <>
       <div className="wrapper">  
              <SideBar/>  
            <div id="content">  
              <div className='content_inner'> 
                  <DashboardHeader/>
                  <div className='dashboard-body'>
                     <h1 className='f48 mb-0 text-white '>Get help</h1>
                     <div className='form_box input-box  mt-64'>
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Name" placeholder="@abacchio"  autocomplete="off" />
            <label for="Name">Name</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="email"  className="form-control login-form-control"  id="Email" placeholder="abacchio@gamblers.com  "  autocomplete="off" />
            <label for="Email">Email Address</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Subject" placeholder="Help with my account"  autocomplete="off" />
            <label for="Subject">Subject</label> 
        </div> 
        <div className="input-box-field form-floating">
            <textarea className="form-control login-form-control Message_box"  id="Message" placeholder="Ask for help "  autocomplete="off" ></textarea> 
            <label for="Message">Message</label> 
        </div> 
            <div className='form-btn   mt-64'> 
            <button type="button" className="themebtn-blue w-100  ">  Send message </button> 
            <div className='error_massage'>
              <span className='error_box bg_success'>Your request has been sent</span>
              <span className='error_box bg_danger d-none'>The email you entered is not valid</span>
            </div>
            </div> 
                  </div>
              </div>
	        </div>
	    </div>
      </div>
    </>
  )
}

export default Gethelp