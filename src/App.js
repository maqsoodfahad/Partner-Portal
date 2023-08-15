// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/Store";

import './assets/HomeAssets/assets/css/style.css'
import './assets/HomeAssets/assets/css/responsive.css' 

// import Home from "./pages/Home/Home";
import ProtectedRoutes from "./router/Protected";
import Redirect from "./router/Redirect";
// import ScrollTop from "./components/ScrollTop"; 
import LoginPage from "../src/pages/Login/LoginPage"; 
import ForgotPassword from "./pages/Login/ForgotPassword";  
import ResetEmail from "./pages/Login/ResetEmail"; 
import NewPassword from "./pages/Login/NewPassword"; 
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Dashboard/Settings/Settings";
import Gethelp from "./pages/Dashboard/Gethelp/Gethelp";
import Billing from "./pages/Dashboard/Billing/Billing";
import Onboarding from "./pages/Onboarding/Onboarding";
import PasswordReset from "./pages/Login/PasswordReset.js";
function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <ScrollTop/> */}
        <Routes>     
          <Route exact path="/" element={<LoginPage />} /> 
          <Route  path="/forgot-password" element={<ForgotPassword />} />
          <Route  path="/resend-email" element={<ResetEmail />} /> 
          <Route path="/new-password" element={<NewPassword />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/settings" element={<Settings />} />  
          <Route path="/gethelp" element={<Gethelp />} />
          <Route path="/billing" element={<Billing />} />  
          <Route path="/on-boarding" element={<Onboarding />} />  
          <Route path="/password-reset" element={<PasswordReset />} />  
           
          

          
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
