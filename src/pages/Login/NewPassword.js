import React, { useState } from "react"; 
import logo from "./../../assets/HomeAssets/assets/images/logo.png";
import eyes from "./../../assets/HomeAssets/assets/images/eyes.png";
import eyes2 from "./../../assets/HomeAssets/assets/images/eyes2.png";
import { Formik, } from "formik";
import { useDispatch } from 'react-redux';
import { setCredational } from '../../store/ui/loginUi';
import { newPassword } from "../../store/api/auth";
import { useNavigate ,useParams} from "react-router-dom";
import http from "../../services/http";

import back from "./../../assets/HomeAssets/assets/images/back.png";
import Toast from "../../Components/Toastify/Toastify";
import { updateValue } from '../../store/ui/userData';
import Header from "../../Components/Layout/Header/Header";

import * as Yup from "yup"; 
export default function NewPassword() {
  const navigate = useNavigate();
  const { id } = useParams();

  let email = localStorage.getItem("email");
  // ShowToast("success", "code has been sent");

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    dispatch(updateValue(values.password));


    // dispatch(setCredational(values));
    dispatch(
      newPassword({
        id: id,
      body:{
        password: values.password,
      // confirmPassword: values.confirmPassword,
   email:email
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

        navigate("/continue-password");
       
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
    confirmPassword: "",
    password: "",
  };
  const validationSchema = Yup.object({
    // email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'The passwords do not mach')
    .required('Required'),
    
  });
  const formdata = () => {
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
              <div className="login-form input-box">
              <div className="login-logo mb-32 mx-auto text-center">
                  <img src={logo} />
                </div> 
                <h1 className="f36 text-center ">Choose New Password</h1>
                <h1 className="f16 text-center mt-17">Almost done. Enter and confirm your new password</h1>
                <div className="login-field mt-32">
                 
                  
                  <div className="input-box-field form-floating">
                    <input
                      // type="password"
                      type={showPassword ? 'text' : 'password'}
                      className="form-control login-form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    <img src={ showPassword ?   eyes2  : eyes} className="showeye" onClick={togglePasswordVisibility}/>
                    <label htmlFor="floatingPassword login-label">Password</label>
                  </div>
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>
                      <small>{errors.password}</small>
                    </div>
                  ) : null}
                  <div className="input-box-field form-floating">
                    <input
                      // type="password"
                      type={showPassword ? 'text' : 'password'}
                      className="form-control login-form-control"
                      id="floatingPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                    />
                    <img src={ showPassword ?   eyes2  : eyes} className="showeye" onClick={togglePasswordVisibility}/>
                    <label htmlFor="floatingPassword login-label">Confirm Password</label>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div style={{ color: "red" }}>
                      <small>{errors.confirmPassword}</small>
                    </div>
                  ) : null}
                 
                  {error? <>
                  <div style={{
                    color:"red",
                    textAlign:"center"
                  }}>

                  <small>{error}</small>
                  </div>
                  </> :null}
                  <button className="themebtn-blue w-100 mt-32" onClick={handleSubmit}>
                  Reset password
                  </button>
                  <div className="back back_btn mt-17 d-flex align-items-center">
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
        <div className="formBox"> 
          <div className="login-body">
            <div className="wrap-login-body mt2">{formdata()}</div>
          </div>
        </div>
        </div>
      </div> 
    </>
  );
}
