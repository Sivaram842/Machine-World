import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import TalkToSales from "./pages/TalkToSales";
import LoginPage from "./pages/LoginPage";
import LoginEmail from "./components/Login/LoginEmail";
import LoginPassword from "./components/Login/LoginPassword";
import Signup from "./pages/Signup";
import CommercialAccount from "./pages/accounts/CommercialAccount";
import PersonalAccount from "./pages/accounts/PersonalAccount";
import PersonalDOB from "./pages/accounts/PersonalDOB";
import ForgotPassword from "./pages/ForgotPassword";
import MainProduct from "./pages/products/MainProduct";

import Product1 from "./pages/products/Product1";
import Product2 from "./pages/products/Product2";

import Demo from "./pages/products/Demo";

// import Intro from "./components/Intro";
// import VerifyEmail from "./components/VerifyEmail";
import MinimalOs from "./pages/Os/MinimalOs";
import SpatialOs from "./pages/Os/SpatialOs";
import Accessories from "./pages/Accessories";
import Dashboard from "./pages/Dashboard";
import SignupLayout from "./pages/SignupLayout";
import Investors from "./pages/Investors";
import EmailVerify from "./pages/EmailVerify";

const App = () => {
  // stop browser scroll restoration (keep this if you still want it)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/talk-to-sales" element={<TalkToSales />} />

      <Route path="/login" element={<LoginPage />}>
        <Route index element={<LoginEmail />} />
        <Route path="password" element={<LoginPassword />} />
      </Route>

      <Route path="/signup" element={<SignupLayout />}>
        <Route index element={<Signup />} />         {/* Email page */}
        <Route path="paccount/dob" element={<PersonalDOB />} />
        <Route path="caccount" element={<CommercialAccount />} />
        <Route path="paccount" element={<PersonalAccount />} />  {/* If you still need */}
      </Route>

      {/* <Route path="/email-verify" element={<VerifyEmail />} /> */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/products" element={<MainProduct />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/email-verify/:token" element={<EmailVerify/>}/>
      <Route path="/product1" element={<Product1 />} />
      <Route path="/product2" element={<Product2 />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/minimal-os" element={<MinimalOs />} />
      <Route path="/spatial-os" element={<SpatialOs />} />
      <Route path="/investors" element={<Investors />} />
    </Routes>
  );
};

export default App;
