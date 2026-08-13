import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import Rafale from "./pages/SimulatorComponents/Rafale";
import MIG29 from "./pages/SimulatorComponents/MIG29";
import MIG29K from "./pages/SimulatorComponents/MIG-29K";
import Tejas from "./pages/SimulatorComponents/Tejas";
import Su30MKI from "./pages/SimulatorComponents/Su-30MKI";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Aerial from "./pages/UseCases/Defence/Aerial";
import GroundWarfare from "./pages/UseCases/Defence/GroundWarfare";
import ScrollToTop from "./components/ScrollToTop";

import Su30CaseStudy1 from "./pages/CaseStudyPages/Su30CaseStudy1";
import Su30CaseStudy2 from "./pages/CaseStudyPages/Su30CaseStudy2";
import Su30CaseStudy3 from "./pages/CaseStudyPages/Su30CaseStudy3";
import Su30CaseStudy4 from "./pages/CaseStudyPages/Su30CaseStudy4";
import Su30CaseStudy5 from "./pages/CaseStudyPages/Su30CaseStudy5";
import Su30CaseStudy6 from "./pages/CaseStudyPages/Su30CaseStudy6";

import TejasCaseStudy1 from "./pages/CaseStudyPages/TejasCaseStudy1";
import TejasCaseStudy2 from "./pages/CaseStudyPages/TejasCaseStudy2";
import TejasCaseStudy3 from "./pages/CaseStudyPages/TejasCaseStudy3";
import TejasCaseStudy4 from "./pages/CaseStudyPages/TejasCaseStudy4";
import TejasCaseStudy5 from "./pages/CaseStudyPages/TejasCaseStudy5";
import TejasCaseStudy6 from "./pages/CaseStudyPages/TejasCaseStudy6";

import RafaleCaseStudy1 from "./pages/CaseStudyPages/RafaleCaseStudy1";
import RafaleCaseStudy2 from "./pages/CaseStudyPages/RafaleCaseStudy2";
import RafaleCaseStudy3 from "./pages/CaseStudyPages/RafaleCaseStudy3";
import RafaleCaseStudy4 from "./pages/CaseStudyPages/RafaleCaseStudy4";
import RafaleCaseStudy5 from "./pages/CaseStudyPages/RafaleCaseStudy5";
import RafaleCaseStudy6 from "./pages/CaseStudyPages/RafaleCaseStudy6";

import Mig29CaseStudy1 from "./pages/CaseStudyPages/Mig29CaseStudy1";
import Mig29CaseStudy2 from "./pages/CaseStudyPages/Mig29CaseStudy2";
import Mig29CaseStudy3 from "./pages/CaseStudyPages/Mig29CaseStudy3";
import Mig29CaseStudy4 from "./pages/CaseStudyPages/Mig29CaseStudy4";
import Mig29CaseStudy5 from "./pages/CaseStudyPages/Mig29CaseStudy5";
import Mig29CaseStudy6 from "./pages/CaseStudyPages/Mig29CaseStudy6";

import Mig29KCaseStudy1 from "./pages/CaseStudyPages/Mig29KCaseStudy1";
import Mig29KCaseStudy2 from "./pages/CaseStudyPages/Mig29KCaseStudy2";
import Mig29KCaseStudy3 from "./pages/CaseStudyPages/Mig29KCaseStudy3";
import Mig29KCaseStudy4 from "./pages/CaseStudyPages/Mig29KCaseStudy4";
import Mig29KCaseStudy5 from "./pages/CaseStudyPages/Mig29KCaseStudy5";
import Mig29KCaseStudy6 from "./pages/CaseStudyPages/Mig29KCaseStudy6";

import PageTransitionOverlay from "./components/PageTransitionOverlay";
import Enterprise from "./pages/UseCases/Enterprise";
import WhyXR from "./pages/WhyXR";
import Su30CaseStudy7 from "./pages/CaseStudyPages/Su30CaseStudy7";
import TejasCaseStudy7 from "./pages/CaseStudyPages/TejasCaseStudy7";
import Mig29CaseStudy7 from "./pages/CaseStudyPages/Mig29CaseStudy7";
import RafaleCaseStudy7 from "./pages/CaseStudyPages/RafaleCaseStudy7";
import Mig29KCaseStudy7 from "./pages/CaseStudyPages/Mig29KCaseStudy7";

const App = () => {
  // stop browser scroll restoration (keep this if you still want it)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  return (
    <div className="font-sf">
      <SmoothScroll />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {/* <PageTransitionOverlay /> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/talk-to-sales" element={<TalkToSales />} />

          <Route path="/login" element={<LoginPage />}>
            <Route index element={<LoginEmail />} />
            <Route path="password" element={<LoginPassword />} />
          </Route>

          <Route path="/signup" element={<SignupLayout />}>
            <Route index element={<Signup />} /> {/* Email page */}
            <Route path="paccount/dob" element={<PersonalDOB />} />
            <Route path="caccount" element={<CommercialAccount />} />
            <Route path="paccount" element={<PersonalAccount />} />{" "}
            {/* If you still need */}
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
          <Route path="/company/investors" element={<Investors />} />

          <Route path="/resources/casestudies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/productbook" element={<ProductBook />} />
          <Route path="/insider" element={<Insider />} />

          <Route path="/company/jobs" element={<Jobs />} />
          <Route path="/company/aboutus" element={<AboutUs />} />
          <Route path="/newsroom" element={<Newsroom />} />

          <Route path="/learning" element={<Learning />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/usecases/entertainment" element={<Entertainment />} />
          <Route path="/usecases/defence/air" element={<Aerial />} />
          <Route path="/usecases/defence/ground" element={<GroundWarfare />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/usecases/enterprise" element={<Enterprise />} />

          <Route path="/contactus" element={<ContactSupportPage />} />
          <Route path="/accountportal" element={<HelpCenterPage />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route
            path="/systemrequirements"
            element={<SystemRequirementsPage />}
          />

          <Route path="/air/simulators/defence" element={<Aircraft />} />
          <Route path="/land/simulators/defence" element={<GroundVehicle />} />
          <Route path="/air/simulators/private" element={<Helicopter />} />
          <Route path="/land/simulators/private" element={<GroundVehicleP />} />

          <Route path="/rafale" element={<Rafale />} />
          <Route path="/mig-29" element={<MIG29 />} />
          <Route path="/mig-29k" element={<MIG29K />} />
          <Route path="/tejas" element={<Tejas />} />
          <Route path="/su-30mki" element={<Su30MKI />} />

          <Route path="/su30-case-study-1" element={<Su30CaseStudy1 />} />
          <Route path="/su30-case-study-2" element={<Su30CaseStudy2 />} />
          <Route path="/su30-case-study-3" element={<Su30CaseStudy3 />} />
          <Route path="/su30-case-study-4" element={<Su30CaseStudy4 />} />
          <Route path="/su30-case-study-5" element={<Su30CaseStudy5 />} />
          <Route path="/su30-case-study-6" element={<Su30CaseStudy6 />} />
          <Route path="/su30-case-study-7" element={<Su30CaseStudy7 />} />

          <Route path="/tejas-case-study-1" element={<TejasCaseStudy1 />} />
          <Route path="/tejas-case-study-2" element={<TejasCaseStudy2 />} />
          <Route path="/tejas-case-study-3" element={<TejasCaseStudy3 />} />
          <Route path="/tejas-case-study-4" element={<TejasCaseStudy4 />} />
          <Route path="/tejas-case-study-5" element={<TejasCaseStudy5 />} />
          <Route path="/tejas-case-study-6" element={<TejasCaseStudy6 />} />
          <Route path="/tejas-case-study-7" element={<TejasCaseStudy7 />} />

          <Route path="/rafale-case-study-1" element={<RafaleCaseStudy1 />} />
          <Route path="/rafale-case-study-2" element={<RafaleCaseStudy2 />} />
          <Route path="/rafale-case-study-3" element={<RafaleCaseStudy3 />} />
          <Route path="/rafale-case-study-4" element={<RafaleCaseStudy4 />} />
          <Route path="/rafale-case-study-5" element={<RafaleCaseStudy5 />} />
          <Route path="/rafale-case-study-6" element={<RafaleCaseStudy6 />} />
          <Route path="/rafale-case-study-7" element={<RafaleCaseStudy7 />} />

          <Route path="/mig29-case-study-1" element={<Mig29CaseStudy1 />} />
          <Route path="/mig29-case-study-2" element={<Mig29CaseStudy2 />} />
          <Route path="/mig29-case-study-3" element={<Mig29CaseStudy3 />} />
          <Route path="/mig29-case-study-4" element={<Mig29CaseStudy4 />} />
          <Route path="/mig29-case-study-5" element={<Mig29CaseStudy5 />} />
          <Route path="/mig29-case-study-6" element={<Mig29CaseStudy6 />} />
          <Route path="/mig29-case-study-7" element={<Mig29CaseStudy7 />} />

          <Route path="/mig29k-case-study-1" element={<Mig29KCaseStudy1 />} />
          <Route path="/mig29k-case-study-2" element={<Mig29KCaseStudy2 />} />
          <Route path="/mig29k-case-study-3" element={<Mig29KCaseStudy3 />} />
          <Route path="/mig29k-case-study-4" element={<Mig29KCaseStudy4 />} />
          <Route path="/mig29k-case-study-5" element={<Mig29KCaseStudy5 />} />
          <Route path="/mig29k-case-study-6" element={<Mig29KCaseStudy6 />} />
          <Route path="/mig29k-case-study-7" element={<Mig29KCaseStudy7 />} />

          <Route path="/whyxr" element={<WhyXR />} />
        </Routes>
      </AnimatePresence>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
