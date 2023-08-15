import React, { useState } from "react"; 
import logo from "./../../assets/HomeAssets/assets/images/logo.png";
import back from "./../../assets/HomeAssets/assets/images/back.png";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setCredational } from "../../store/ui/loginUi";
import { forgotPassword } from "../../store/api/auth";
import { updateValue } from "../../store/ui/userData"; 
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Toast from "../../Components/Toastify/Toastify";
import { SpinnerDotted } from "spinners-react";
import Header from "../../Components/Layout/Header/Header";


export default function ForgotPassword() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) => {

        setLoading(true)
        dispatch(updateValue(values.email));
        dispatch(
            forgotPassword({
                body: {
                    email: values.email,
                },
                onSuccess: (res) => {
                    localStorage.setItem("email", values.email);
                    navigate("/resend-email");
                    setLoading(false)

                },

                onError: (error) => {
                    setLoading(false)

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
                        } else if (error.response.data) {
                            setError(error.response.data);
                            Toast.error(error.response.data, {
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
                            <div className="login-form">
                            <div className="login-logo mb-32 mx-auto text-center">
                                <img src={logo} />
                                </div>  
                                <div className="login-field input-box">
                                    <h1 className="f36 text-center">Forgot Password?</h1>
                                    <h1 className="f16 text-center mt-17">
                                        No worries, we'll send you reset instructions
                                    </h1>
                                    <div className="input-box-field form-floating mt-32">
                                        <input
                                            type="email"
                                            className="form-control login-form-control"
                                            id="floatingInput"
                                            placeholder="email"
                                            onChange={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            value={values.email}
                                        />
                                        <label htmlFor="floatingInput">Email </label>
                                        {errors.email && touched.email ? (
                                            <div style={{ color: "red" }}>
                                                <small>{errors.email}</small>
                                            </div>
                                        ) : null}

{errors.password && touched.password ? (
                                        <div style={{ color: "red" }}>
                                            <small>{errors.password}</small>
                                        </div>
                                    ) : null}
                                    {error ? (
                                        <>
                                            <div
                                                style={{
                                                    color: "red",
                                                    textAlign: "right",
                                                }}
                                            >
                                                <small>{error}</small>
                                            </div>
                                        </>
                                    ) : null}

                                    </div>
 
                                    <button className="themebtn-blue w-100 mt-64 mt-reset"

                                        disabled={loading ? true : false}

                                        onClick={handleSubmit}>

                                        {loading ? (
                                            <SpinnerDotted style={{ height: "40", color: "black" }} />
                                        ) : (
                                            " Reset password"
                                        )}
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
                     <div className="formBox h-auto"> 
                       <div className="wrap-login-body mt2">{formdata()}</div>
                     </div>
                </div>
            </div>
        </>
    );
}
