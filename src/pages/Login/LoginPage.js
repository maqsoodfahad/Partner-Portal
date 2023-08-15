import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import Toast from "../../Components/Toastify/Toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../store/api/auth";
import { setCredational } from "../../store/ui/loginUi";
import logo from './../../assets/HomeAssets/assets/images/logo.png'
import eyes from './../../assets/HomeAssets/assets/images/eyes.png'
import eyes2 from './../../assets/HomeAssets/assets/images/eyes2.png'
import Header from "../../Components/Layout/Header/Header"; 
export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    // console.log("valuees=====>>", values);
    dispatch(setCredational(values));
    dispatch(
      login({
        body: {
          email: values.email,
          password: values.password,
        },
        onSuccess: (res) => {
          navigate("/dashboard");
          // console.log("res===>", res);
          // console.log("res===>", res.data.message);
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
          // console.log("error===>", error);
          if (error.response) {
            if (error.response.data.errors) {
              for (let key in error.response.data.errors) {
                setError(error.response.data.errors[key]);
                Toast.error(error.response.data.errors[key], {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }
            } else if (error.response.data.message) {
              setError(error.response.data.message);
              Toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          }
        },
      })
    );
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
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
              <div className="login-form ">
                <div className="login-logo mb-32 mx-auto text-center">
                  <img src={logo} />
                </div> 
                <div className="login-field input-box">
                  <h1 className="f36 text-center mb-32">Partner Login</h1> 
                 
                  <div className="input-box-field form-floating">
                    <input
                      type="email"
                      className="form-control login-form-control"
                      id="login-email" 
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="email"
                      autocomplete="off"
                    />
                    <label for="login-email">Email</label>

                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>
                        <small>{errors.email}</small>
                      </div>
                    ) : null}
                  </div> 
                  <div className="input-box-field ">
                   <div className="icon-wrap form-floating">
                   <input
                      // type="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control login-form-control"
                      id="login-password"
                      placeholder="Password"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />                   
                    <img
                      src={showPassword ? eyes2 : eyes}
                      className="showeye"
                      onClick={togglePasswordVisibility}
                    />
                     <label for="login-password"> Password </label>
                   </div>                 
                      {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>
                      <small>{errors.password}</small>
                    </div>
                  ) : null}
                  </div>
                  <div className="login-bottom mt-24"> 
                    <label className="redio_wrap"> 
                      <input type="checkbox" name="radio" id="Remember-me" />
                      <label for="Remember-me">Remember me</label> 
                    </label>
                    <h1 className="f16 mb-0 " 
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot password
                    </h1>
                  </div>
                  <button type="button" className="themebtn-blue w-100 mt-32" onClick={handleSubmit}>
                    Sign In
                  </button> 


                  {/* <p className="f16 mt-17 txt_flex">New to LionsPride? 
                  <span className="ml-2  txt-blue" onClick={() => navigate("/signup")} > 
                     Sign up here
                  </span>
                  </p> */}

                  
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
