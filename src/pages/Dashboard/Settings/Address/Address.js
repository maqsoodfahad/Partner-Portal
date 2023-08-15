import React from 'react'

const Address = () => {
  return (
    <>
    <div className='form_box input-box'>
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Street" placeholder="1600 Pennsylvania Avenue NW"  autocomplete="off" />
            <label for="Street">Street</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="City" placeholder="Washington  "  autocomplete="off" />
            <label for="City">City</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="State" placeholder="District of Columbia"  autocomplete="off" />
            <label for="State">State</label> 
        </div> 
        <div className="input-box-field form-floating">
            <input type="text"  className="form-control login-form-control"  id="Zipcode" placeholder="Zip code "  autocomplete="off" />
            <label for="Zipcode">Zip code</label> 
        </div> 
        <div className='form-btn d-flex mt-64'>
        <button type="button" className="themebtn-dark w-100 mr-16">  Cancel </button> 
        <button type="button" className="themebtn-blue w-100  ">  Update </button> 
        </div>
    </div>
    </>
  )
}

export default Address