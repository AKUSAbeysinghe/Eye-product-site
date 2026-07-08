import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Shop from "./components/selectionHeader.jsx"

import Atelier from "./components/Pages/Atelier.jsx";
import Footer from "./components/Footer";
import About from "./components/Pages/About.jsx";

import Policies from "./components/Pages/Policies.jsx";
import TermsOfService from "./components/Pages/Terms.jsx";
import Questions from "./components/Pages/Questions.jsx";
import EyeExams from "./components/Pages/EyeExams.jsx";
import Journal from "./components/Pages/Journal.jsx";
import Visit from "./components/Pages/Visit.jsx";





// ✅ Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";


// ✅ Import ScrollToTop
import ScrollToTop from "./components/ScrollToTop.jsx";
import Eyeglasses from "./components/Pages/EyeGlass.jsx";
import Sunglasses from "./components/Pages/Sunglasses.jsx";
import ContactLenses from "./components/Pages/ContactLenses.jsx";
import LenseSolutions from "./components/Pages/LensSolutions.jsx";
import Accessories from "./components/Pages/Accessories.jsx";
import EyeCareServices from "./components/Pages/EyeCareServices.jsx";
import Brands from "./components/Pages/Brands.jsx";



// ✅ Smart Layout
function Layout({ children }) {
  const location = useLocation();
  
  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(location.pathname);

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      
      {/* ScrollToTop - Best Place */}
      <ScrollToTop />

      {/* NAVBAR - Hide for Admin */}
      {!hideLayout && (
        <div className="pt-10 px-10 pb-0 flex-shrink-0">
          <Navbar />
        </div>
      )}
      
      {/* CONTENT */}
      <div className="pt-10 px-10 pb-0 flex-1">
        {children}
      </div>
      
      {/* FOOTER - Hide for Admin */}
      {!hideLayout && (
        <div className="pt-0 pb-10 px-10 flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/shop" element={<Layout><Shop /></Layout>} />
        <Route path="/atelier" element={<Layout><Atelier /></Layout>} />
        <Route path="/journal" element={<Layout><Journal/></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/eyeglasses" element={<Layout><Eyeglasses /></Layout>} />
        <Route path="/sunglasses" element={<Layout><Sunglasses /></Layout>} />
        <Route path="/contact-lenses" element={<Layout><ContactLenses/></Layout>} />
        <Route path="/lens-solutions" element={<Layout><LenseSolutions/></Layout>} />
         <Route path="/accessories" element={<Layout><Accessories /></Layout>} />
        <Route path="/eye-care-services" element={<Layout><EyeCareServices/></Layout>} />
        <Route path="/brands" element={<Layout><Brands/></Layout>} />

        <Route path="/policies" element={<Layout><Policies /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/Questions" element={<Layout><Questions /></Layout>} />
        <Route path="/eye-exams" element={<Layout><EyeExams/></Layout>} />
        <Route path="/visit" element={<Layout><Visit /></Layout>} />

        {/* Admin Pages */}
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />

        {/* 404 */}
        <Route path="*" element={
          <Layout>
            <div className="text-center py-12 font-sans">
              404: Page Not Found
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;