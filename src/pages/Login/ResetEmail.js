import React, { useState } from "react"; 
import { Formik, } from "formik";
import { useDispatch ,useSelector } from 'react-redux';
import { setCredational } from '../../store/ui/loginUi';
import { forgotPassword } from "../../store/api/auth";
import Toast from "../../Components/Toastify/Toastify";
import back from "./../../assets/HomeAssets/assets/images/back.png";
import logo from './../../assets/HomeAssets/assets/images/logo.png' 
import Header from "../../Components/Layout/Header/Header"; 
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import HeaderCreation from "../../omponents/Layout/Header/HeaderCreation2";
export default function ResetEmail() {
  const [error, setError] = useState("");
  const value = useSelector((state) => state.userData.value);
  let email = localStorage.getItem("email");
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = () => {

    dispatch(
      forgotPassword({
      body:{
        email: email,
      },
      onSuccess: (res) => {
        Toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

       
      },

      onError: (error) => {
      
     


        if (error.response) {
          if (error.response.data.errors) {
            for (let key in error.response.data.errors) {
              setError(error.response.data.errors[key]);
            }
          } else if (error.response.data) {
            setError(error.response.data);
          }
        }
      },
    })
    );
    
  
  };

  const initialValues = {
    email: "",
  
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    
  });
  const formdata = () => {
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}         
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <div className="login-form">
              <div className="login-logo mb-32 mx-auto text-center">
                  <img src={logo} />
              </div>  
                <div className="login-field">
                <h1 className="f36 text-center">Check your email</h1>
                <h1 className="f16 text-center mt-17">We sent a password reset link to john@gambler.com</h1>
                 <button className="themebtn-blue w-100 mt-64 mt-resend" >
                  Open email app
                  </button>
                    <p className="f16 mt-17 txt_flex mb-0">Didn't receive the email?
                      <span className="ml-2  txt-blue"  onClick={onSubmit} > 
                       <u> Click to resend</u>
                      </span>
                    </p> 
                    <div className="back back_btn mt-32 d-flex align-items-center">
                        <img src={back} onClick={() => navigate("/")} />
                         <h1 className="f16 mb-0 hover" onClick={() => navigate("/")}>Back to log In</h1>
                   </div>
                  
                </div>
              </div>
            </>
          )}
        </Formik>
      </>
    );
  };
  return (
    <> 
     <div className="bg_wrap">
                     <Header />
                <div className="formBox_main">
                     <div className="formBox h-auto"> 
                       <div className="wrap-login-body mt2">  {formdata()}</div>
                     </div>
                </div>
            </div> 
    </>
  );
}
