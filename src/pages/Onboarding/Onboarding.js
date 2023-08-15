import React, { useState } from 'react';
import Header from "../../Components/Layout/Header/Header";
import BasicInfo from './BasicInfo/BasicInfo';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="onboarding-wrap bg_dark">
        <Header />
        <div className="formBox_main">
          <div className="Onboarding_box">
            <h1 className='f36 text-white let-get'>Let's get your Partner Account Setup</h1>
            <div className='OnboardingForm'>


             {/* firstStep one */}
              <fieldset className={currentStep === 1 ? 'firstStep' : 'd-none'}>
                <div className='OnboardingForm'>
                  <div className='formStep w280'>
                    <ul>
                      <li className='active'><span>Basic info</span></li>
                      <li><span>Address</span></li>
                      <li><span>Payments</span></li>
                      <li className='txt-blue'>Join the platform</li>
                    </ul>
                  </div>
                  <div className='form-box w368'>
                    <h1 className='f24 mb-24'>Basic info</h1>
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
                    </div>
                    <div className='form-btn d-flex mt-64'>
                      <button type="button" className="themebtn-dark w-100  mr-16">Back</button>
                      <button type="button" className="themebtn-blue w-100 nextbtn" onClick={handleNextStep}>Next</button>
                    </div>
                  </div>
                </div>
              </fieldset>



            {/* firstStep two */}
              <fieldset className={currentStep === 2 ? 'firstSecond' : 'd-none'}>
                <div className='OnboardingForm'>
                  <div className='formStep w280'>
                    <ul>
                      <li className='active'><span>Basic info</span></li>
                      <li className='active'><span>Address</span></li>
                      <li><span>Payments</span></li>
                      <li className='txt-blue'>Join the platform</li>
                    </ul>
                  </div>
                  <div className='form-box w368'>
                    <h1 className='f24 mb-24'>Address</h1>
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
                    </div>
                    <div className='form-btn d-flex mt-64'>
                      <button type="button" className="themebtn-dark w-100 backbtn mr-16" onClick={handlePreviousStep}>Back</button>
                      <button type="button" className="themebtn-blue w-100 nextbtn" onClick={handleNextStep}>Next</button>
                    </div>
                  </div>
                </div>
              </fieldset>


          {/* firstStep three */}
              <fieldset className={currentStep === 3 ? 'firstThird' : 'd-none'}>
                <div className='OnboardingForm'>
                  <div className='formStep w280'>
                    <ul>
                      <li className='active'><span>Basic info</span></li>
                      <li className='active'><span>Address</span></li>
                      <li className='active'><span>Payments</span></li>
                      <li className='txt-blue'>Join the platform</li>
                    </ul>
                  </div>
                  <div className='form-box w368'>
                    <h1 className='f24 mb-24'>Payments</h1>
                    <div className='form_box input-box w-100'>
                        <div className="input-box-field form-floating">
                            <input type="text"  className="form-control login-form-control"  id="UsRoutingnumberername" placeholder="021000021"  autocomplete="off" />
                            <label for="Routingnumber ">Routing number </label> 
                        </div> 
                        <div className="input-box-field form-floating">
                            <input type="text"  className="form-control login-form-control"  id="AccountNumber" placeholder="1234567890"  autocomplete="off" />
                            <label for="AccountNumber">Account Number</label> 
                        </div> 
                        <div className="redio_wrap">
                            <input type="checkbox" id="one" name="gender" />
                            <label for="one" className=' mt-32'>Use previous information in the following fields</label>
                        </div>
                        <div className='d-flex mt-24 justify-content-between'>
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
                        <div className="redio_wrap">
                            <input type="checkbox" id="IAgree" name="gender" />
                            <label for="IAgree" className=' mt-32'>I Agree to <Link className='txt-blue'>Terms of Service</Link> and  <Link className='txt-blue'>Privacy Policy</Link></label>

                        </div>  
                    </div>
                    <div className='form-btn d-flex mt-64'>
                      <button type="button" className="themebtn-dark w-100 backbtn mr-16" onClick={handlePreviousStep}>Back</button>
                      <button type="button" className="themebtn-blue w-100">Sign me up</button>
                    </div>
                  </div>
                </div>
              </fieldset>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
