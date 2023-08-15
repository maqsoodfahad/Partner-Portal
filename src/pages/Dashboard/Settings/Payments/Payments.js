import React from 'react'

const Payments = () => {
  return (
    <>
    <div className='form_box input-box'>
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="UsRoutingnumberername" placeholder="021000021"  autocomplete="off" />
            <label for="Routingnumber
">Routing number
</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="AccountNumber" placeholder="1234567890"  autocomplete="off" />
            <label for="AccountNumber">Account Number</label> 
        </div> 
        <div className='d-flex'>
        <div className="input-box-field form-floating mr-16">
            <input type="text"  className="form-control login-form-control"  id="Firstname" placeholder="First name"  autocomplete="off" />
            <label for="Firstname">First name</label> 
        </div>
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Lastname" placeholder="Last name"  autocomplete="off" />
            <label for="Lastname">Last name</label> 
        </div>
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Address" placeholder="123 Main Street, Anytown, NY 12345"  autocomplete="off" />
            <label for="Address">Address</label> 
        </div> 
        <div className='form-btn d-flex mt-64'>
        <button type="button" className="themebtn-dark w-100 mr-16">  Cancel </button> 
        <button type="button" className="themebtn-blue w-100  ">  Update </button> 
        </div>
    </div>
    </>
  )
}

export default Payments