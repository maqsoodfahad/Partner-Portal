import React from 'react'

const Basic = () => {
  return (
    <>
    <div className='form_box input-box'>
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Username" placeholder="Username"  autocomplete="off" />
            <label for="Username">Username</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Firstname" placeholder="First name"  autocomplete="off" />
            <label for="Firstname">First name</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Lastname" placeholder="Last name"  autocomplete="off" />
            <label for="Lastname">Last name</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="number"  className="form-control login-form-control"  id="Phonenumber" placeholder="Phone number"  autocomplete="off" />
            <label for="Phonenumber">Phone number</label> 
        </div> 
        <div className='form-btn d-flex mt-64'>
            <button type="button" className="themebtn-dark w-100 mr-16">  Cancel </button> 
            <button type="button" className="themebtn-blue w-100  ">  Update </button> 
        </div>
    </div>
    </>
  )
}

export default Basic