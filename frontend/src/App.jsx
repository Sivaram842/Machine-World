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
import Product3 from "./pages/products/Product3";
import Learning from "./pages/UseCases/Learning";
import Demo from "./pages/products/Demo";

// import Intro from "./components/Intro";
// import VerifyEmail from "./components/VerifyEmail";
import MinimalOs from "./pages/Os/MinimalOs";
import SpatialOs from "./pages/Os/SpatialOs";
import Accessories from "./pages/Accessories";
import Dashboard from "./pages/Dashboard";
import SignupLayout from "./pages/SignupLayout";
import Investors from "./pages/Resources/Investors";
import EmailVerify from "./pages/EmailVerify";
import VerifyNotice from "./pages/VerifyNotice";
import CaseStudies from "./pages/Resources/CaseStudies";
import Resources from "./pages/Resources/Resources";
import ProductBook from "./pages/Resources/ProductBook";
import Jobs from "./pages/Company/Jobs";
import AboutUs from "./pages/Company/AboutUs";
import Newsroom from "./pages/Company/NewsRoom";
import SmoothScroll from "./components/SmoothScroll";
import Industry from "./pages/UseCases/Industry";
import Entertainment from "./pages/UseCases/Entertainment";
import Medical from "./pages/UseCases/Medical";
import ContactSupportPage from "./pages/Support/ContactUs";
import HelpCenterPage from "./pages/Support/AccountPortalPage";
import HelpCenter from "./pages/Support/HelpCenter";
import SystemRequirementsPage from "./pages/Support/SystemRequirementPage";
import Insider from "./pages/Resources/Insider";
import Aircraft from "./pages/Simulators/Defence/Aircraft";
import GroundVehicle from "./pages/Simulators/Defence/GroundVehicle";
import Helicopter from "./pages/Simulators/Private/Helicopter";
import GroundVehicleP from "./pages/Simulators/Private/GroundVehicle";


const App = () => {
  // stop browser scroll restoration (keep this if you still want it)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmoothScroll />
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
        <Route path="/email-verify/:token" element={<EmailVerify />} />
        <Route path="/verify-notice" element={<VerifyNotice />} />

        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/minimal-os" element={<MinimalOs />} />
        <Route path="/spatial-os" element={<SpatialOs />} />
        <Route path="/investors" element={<Investors />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/product-book" element={<ProductBook />} />
        <Route path="/insider" element={<Insider />} />


        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/newsroom" element={<Newsroom />} />

        <Route path="/learning" element={<Learning />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/medical" element={<Medical />} />

        <Route path="/contactus" element={<ContactSupportPage />} />
        <Route path="/accountportal" element={<HelpCenterPage />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/systemrequirements" element={<SystemRequirementsPage />} />


        <Route path="/aircrafts" element={<Aircraft />} />
        <Route path="/ground-defence" element={<GroundVehicle />} />
        <Route path="/helicopter" element={<Helicopter />} />
        <Route path="/ground-private" element={<GroundVehicleP />} />
      </Routes>
    </>
  );
};

export default App;
